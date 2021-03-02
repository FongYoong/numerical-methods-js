import {isValidMath, mathjsKeywords, formatLatex} from "../../utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";
import Graph from "../../Graph";
import * as Desmos from 'desmos';

import { addStyles, EditableMathField } from 'react-mathquill';
import { parse } from 'mathjs';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';
import Joyride, { Step as JoyrideStep, CallBackProps as JoyrideCallBackProps} from "react-joyride";
import Collapse from '@material-ui/core/Collapse';
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const TOUR_STEPS: JoyrideStep[] = [
    {
        target: ".function-input",
        title: "Function",
        content:
        "Type a math function which only has the variable x. cos(x), sin(x) and e^x are supported.",
        disableBeacon: true,
    },
    {
        target: ".interval-input",
        title: "Interval",
        content:
            "Select the lower and upper bounds of x",
    },
    {
        target: ".errorThreshold-input",
        title: "Error Threshold",
        content:
            "Specify the minimum error threshold",
    },
    {
        target: ".iteration-slider",
        title: "Iteration slider",
        content:
            "Change the slider to view the result of any iteration.",
    },
    {
        target: ".graph-button",
        title: "View graph",
        content:
            "Click this to visualise the results.",
    },
];

// Styles
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
  },
  container: {
    "& > *": {
        margin: theme.spacing(1)
    }
  },
  card: {
    margin: theme.spacing(0.5),
  },
  cardContent: {
    overflow: 'auto',
    "& > *": {
        margin: theme.spacing(0.5)
    }
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(2),
  },
}));

addStyles(); // inserts the required css to the <head> block for mathquill

function NonlinearFalsePosition({methodName}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();

    // Function
    const [functionLatex, setFunctionLatex] = useState(String.raw`x-\cos\left( x\right)`);
    const [functionText, setFunctionText] = useState('');

    let functionValue;
    let functionError = false;
    let functionErrorText = "";
    try {
        functionValue = parse(functionText);
        functionValue.traverse(function (node, path, parent) {
            if (node.type === 'SymbolNode' && !mathjsKeywords.includes(node.name)) {
                if (node.name !== 'x') {
                    throw "variableName";
                }
            }
        });
    }
    catch(e) {
        functionError = true;
        functionErrorText = e === "variableName" ? "Only x variable is allowed." :  "Invalid equation!";
    }

    // Interval
    const [lowerX, setLowerX] = useState(0);
    const [upperX, setUpperX] = useState(3);
    let intervalError = false;
    let lowerXErrorText = "";
    let upperXErrorText = "";
    if (lowerX >= upperX) {
        intervalError = true;
        lowerXErrorText = "Lower x must be lower than upper x!";
        upperXErrorText = "Upper x must be higher than lower x!";
    }

    // Error threshold
    const [errorThreshold, setErrorThreshold] = useState(0.0005);
    let thresholdError = false;
    let thresholdErrorText = "";
    if (errorThreshold < 0) {
        thresholdError = true;
        thresholdErrorText = "Threshold cannot be negative!";
    }

    let hasError = functionError || intervalError || thresholdError;

    // Solve
    let solve = false;
    let exceedIterError = false;
    let exceedIterErrorText = "";
    let results = [];
    let iterations = 1;
    if (isValidMath(functionValue) && !hasError) {
        solve = true;
        let i = 0;
        while (true) {
            let oldLowerX = (i === 0) ? lowerX: results[i - 1].newLowerX;
            let oldUpperX = (i === 0) ? upperX: results[i - 1].newUpperX;
            let newLowerX = oldLowerX;
            let newUpperX = oldUpperX;
            let lowerFuncResult, upperFuncResult, rootX, rootFuncResult, errorX;
            try {
                lowerFuncResult = functionValue.evaluate({x : oldLowerX});
                upperFuncResult = functionValue.evaluate({x : oldUpperX}); // upperFuncResult is for visualisation purposes, no relevance in the calculations
                rootX = oldUpperX - upperFuncResult * (oldLowerX - oldUpperX) / (lowerFuncResult - upperFuncResult);
                rootFuncResult = functionValue.evaluate({x : rootX});
            }
            catch {
                hasError = true;
                functionError = true;
                functionErrorText = "Only variable x is allowed!";
                solve = false;
                break;
            }
            let rootFound = false;
            let product = lowerFuncResult * rootFuncResult;
            if (product < 0) {
                newUpperX = rootX;
            }
            else if (product > 0) {
                newLowerX = rootX;
            }
            else {
                rootFound = true;
            }

            if (!rootFound && i !== 0) {
                // Check if root error is lower than threshold
                errorX = Math.abs(rootX - results[i - 1].rootX);
                if (errorX < errorThreshold){
                    rootFound = true;
                }
            }
            results.push({
                oldLowerX,
                newLowerX,
                oldUpperX,
                newUpperX,
                rootX,
                lowerFuncResult,
                upperFuncResult,
                rootFuncResult,
                errorX,
            });
            i++;
            if (rootFound) {
                break;
            }
            if (i > 1000) {
                exceedIterError = true;
                exceedIterErrorText = "Exceeded 1000 iterations!";
                break;
            }
        }
        iterations = i;
    }

    // Joyride Tour
    const [runTour, setRunTour] = useState(false);
    const openHelp = () => {
        setRunTour(true);
    };
    const joyrideCallback = (state: JoyrideCallBackProps) => {
        if (state.action === "reset" || state.action === "close") {
            setRunTour(false);
        }
    };

    let params = {functionLatex, errorThreshold, iterations, exceedIterError, exceedIterErrorText, results};
    
    return (
        <>
            <Header methodName = {methodName} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="function-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Function:
                                    </Typography>
                                    <EditableMathField
                                        disabled={false}
                                        latex={functionLatex}
                                        onChange={(mathField) => {
                                            setFunctionText(mathField.text());
                                            setFunctionLatex(mathField.latex());
                                        }}
                                        mathquillDidMount={(mathField) => {
                                            setFunctionText(mathField.text())
                                        }}
                                    />
                                    <Collapse in={functionError}>
                                        <Alert severity="error">
                                            {functionErrorText}
                                        </Alert>
                                    </Collapse>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid className="interval-input" container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Lower x value:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setLowerX(parseFloat(event.target.value))}
                                        error={intervalError}
                                        label={intervalError?"Error":""}
                                        defaultValue={lowerX.toString()}
                                        helperText={lowerXErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Upper x value:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setUpperX(parseFloat(event.target.value))}
                                        error={intervalError}
                                        label={intervalError?"Error":""}
                                        defaultValue={upperX.toString()}
                                        helperText={upperXErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="errorThreshold-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Error threshold:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setErrorThreshold(parseFloat(event.target.value))}
                                        error={thresholdError}
                                        label={thresholdError?"Error":""}
                                        defaultValue={errorThreshold.toString()}
                                        helperText={thresholdErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Zoom>
                </Container>
            </Paper>

            <Divider />
            
            <Collapse in={solve}>
                <Fade triggerOnce>
                    <Paper className={styleClasses.paper}>
                        {solve && <Steps params={params}/>}
                    </Paper>
                </Fade>
            </Collapse>
            <Tooltip arrow title="Help" placement="top">
                <Fab color="secondary" aria-label="help" className={styleClasses.fab} onClick={openHelp}>
                    <HelpIcon />
                </Fab>
            </Tooltip>
            <Joyride
                scrollToFirstStep 
                run={runTour}
                steps={TOUR_STEPS}
                continuous={true}
                showSkipButton={true}
                    locale={{
                    last: "End tour",
                }}
                callback={joyrideCallback}
            />
            
        </>
    );
}
/*
import Snackbar from '@material-ui/core/Snackbar';
const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
const errorSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpenErrorSnackbar(false);
};
<Snackbar open={openErrorSnackbar} autoHideDuration={2000} onClose={errorSnackbarClose}>
    <Alert onClose={errorSnackbarClose} severity="error">
        There is an error with the {functionError?"function":"iterations"}.
    </Alert>
</Snackbar>
*/

function Steps({params}) {

    const styleClasses = useStyles();

    const [currentIteration, setCurrentIteration] = useState(1);
    let hasError = params.exceedIterError;
    let errorText = params.exceedIterErrorText;

    let results = params.results;
    let currentResult = results[currentIteration - 1];

    let latexContent, graphCallback;

    if (currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else {
        let oldLowerXLatex = String.raw`x_{lower_{${currentIteration - 1}}}`;
        let oldUpperXLatex = String.raw`x_{upper_{${currentIteration - 1}}}`;
        let newLowerXLatex = String.raw`x_{lower_{${currentIteration}}}`;
        let newUpperXLatex = String.raw`x_{upper_{${currentIteration}}}`;
        let newRootXLatex = String.raw`x_{root_{${currentIteration - 1}}}`;
        latexContent=String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ ${oldLowerXLatex} &=& ${formatLatex(currentResult.oldLowerX)}
        \\ ${oldUpperXLatex} &=& ${formatLatex(currentResult.oldUpperX)}
        \\ ${newRootXLatex} &=&  ${oldUpperXLatex}-\frac{f(${oldUpperXLatex})(${oldLowerXLatex} - ${oldUpperXLatex})}{f(${oldLowerXLatex}) - f(${oldUpperXLatex})}
        \\                       &=& ${formatLatex(currentResult.rootX)}
        \\
        `;

        let rootFound = false;
        latexContent += String.raw`
        \\ f(${oldLowerXLatex}) &=& ${formatLatex(currentResult.lowerFuncResult)}
        \\ f(${newRootXLatex}) &=& ${formatLatex(currentResult.rootFuncResult)}
        \\
        \\
        `;
        let product = currentResult.lowerFuncResult * currentResult.rootFuncResult;
        if (product < 0) {
            latexContent += String.raw`
            \end{array}
            \\ \hline
            \\ \text{Given that } f(${oldLowerXLatex})f(${newRootXLatex}) < 0,
            \\
            \begin{array}{lcl}
            \\ ${newLowerXLatex} &=& ${oldLowerXLatex}
            \\                   &=& ${formatLatex(currentResult.newLowerX)}
            \\ ${newUpperXLatex} &=& ${newRootXLatex}
            \\                   &=& ${formatLatex(currentResult.newUpperX)}
            `;
        }
        else if (product > 0) {
            latexContent += String.raw`
            \end{array}
            \\ \hline
            \\ \text{Given that } f(${oldLowerXLatex})f(${newRootXLatex}) > 0,
            \\
            \begin{array}{lcl}
            \\ ${newLowerXLatex} &=& ${newRootXLatex}
            \\                   &=& ${formatLatex(currentResult.newLowerX)}
            \\ ${newUpperXLatex} &=& ${oldUpperXLatex}
            \\                   &=& ${formatLatex(currentResult.newUpperX)}
            `;
        }
        else {
            rootFound = true;
            latexContent += String.raw`
            \end{array}
            \\ \hline
            \\ \text{Root found because }
            \\
            \begin{array}{lcl}
            \\ f(${oldLowerXLatex})f(${newRootXLatex}) == 0.
            `;
        }
        
        if (!rootFound && currentIteration > 1) {
            let oldRootXLatex = String.raw`x_{root_{${currentIteration - 2}}}`;
            latexContent += String.raw`
            \\ ${oldRootXLatex} &=& ${formatLatex(results[currentIteration - 2].rootX)}
            \\ Error &=& |${newRootXLatex} - ${oldRootXLatex}|
            \\       &=& |${formatLatex(currentResult.errorX)}|
            \\
            `;
            if (currentResult.errorX < params.errorThreshold) {
                latexContent += String.raw`
                \end{array}
                \\
                \\ \hline
                \\ \text{Root found because:}
                \\
                \begin{array}{lcl}
                \\ Error &<& Error Threshold
                \\ ${formatLatex(currentResult.errorX)} &<& ${formatLatex(params.errorThreshold)}
                `;
            }
        }
        latexContent += String.raw`\end{array}\end{array}`;

        graphCallback = (calculator, currentResult) => {
            calculator.current.setExpression({ id: 'function', color: Desmos.Colors.BLUE, latex: params.functionLatex});
            calculator.current.setExpression({ id: 'lowerX', color: Desmos.Colors.GREEN, pointStyle: Desmos.Styles.POINT, label: "Lower", showLabel:true, latex:
                `(${currentResult.oldLowerX}, ${currentResult.lowerFuncResult})` });
            calculator.current.setExpression({ id: 'upperX', color: Desmos.Colors.GREEN, pointStyle: Desmos.Styles.POINT, label: "Upper", showLabel:true, latex:
                `(${currentResult.oldUpperX}, ${currentResult.upperFuncResult})` });
            calculator.current.setExpression({ id: 'root', color: Desmos.Colors.RED, pointStyle: Desmos.Styles.POINT, label: "Root", showLabel:true, latex:
                `(${currentResult.rootX}, 0)` });
        }
    }

    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
    
    return (
        <Container className={styleClasses.container}>
            <Collapse in={hasError}>
                <Alert severity="error">
                    {errorText}
                </Alert>
            </Collapse>
            <Collapse in={!hasError}>
                <Grid className="results" container spacing={1} direction="column" alignItems="center" justify="center">
                    <Grid xs item>
                        <Zoom triggerOnce>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Converged after {params.iterations} iterations
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                
                    <Grid container xs item direction={smallScreen?"column":"row"} alignItems="center" justify="space-evenly">
                        <Grid xs item className="iteration-slider">
                            <Slide direction="left" triggerOnce>
                                <Box id="iteration-slider" height={smallScreen?null:"20rem"} width={smallScreen?"70vw":null}>
                                    <Slider
                                        orientation={smallScreen?"horizontal":"vertical"}
                                        onChange={(event, value) => setCurrentIteration(value)}
                                        defaultValue={1}
                                        aria-labelledby="discrete-slider-small-steps"
                                        step={1}
                                        marks
                                        min={1}
                                        max={params.iterations}
                                        valueLabelDisplay="on"
                                    />
                                    
                                </Box>
                            </Slide>
                        </Grid>
                        <Grid xs item container spacing={1} direction="column" alignItems="center" justify="center">
                            <Grid xs item className="step-math">
                                <Zoom duration={500} triggerOnce>
                                    <Card className={styleClasses.card}>
                                        <CardContent className={styleClasses.cardContent}>
                                            <Typography variant="h6">
                                                Iteration {currentIteration}:
                                            </Typography>
                                            <TeX math={latexContent} block />
                                        </CardContent>
                                    </Card>
                                </Zoom>
                            </Grid>
                        </Grid>
                        <Grid xs item className="graph-button">
                            <Slide direction="right" triggerOnce>
                                <Graph params={{currentIteration, graphCallback, smallScreen, ...params}} />
                            </Slide>
                        </Grid>
                    </Grid>
                </Grid>
            </Collapse>

        </Container>
    )
}

export default NonlinearFalsePosition;