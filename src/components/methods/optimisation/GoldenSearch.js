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
        target: ".intervalThreshold-input",
        title: "Interval Threshold",
        content:
            "Specify the minimum interval threshold",
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

function OptiGoldenSearch({methodName}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();

    // Function
    const [functionLatex, setFunctionLatex] = useState(String.raw`3+6x-4x^2`);
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
    const [lowerX, setLowerX] = useState(-1);
    const [upperX, setUpperX] = useState(2);
    let intervalError = false;
    let lowerXErrorText = "";
    let upperXErrorText = "";
    if (lowerX >= upperX) {
        intervalError = true;
        lowerXErrorText = "Lower x must be lower than upper x!";
        upperXErrorText = "Upper x must be higher than lower x!";
    }
    let lowerXError = false;
    if (isNaN(lowerX)) {
        lowerXError = true;
        lowerXErrorText = "Lower x must be a number!";
    }
    let upperXError = false;
    if (isNaN(upperX)) {
        upperXError = true;
        upperXErrorText = "Upper x must be a number!";
    }

    // Interval threshold
    const [intervalThreshold, setIntervalThreshold] = useState(0.25);
    let thresholdError = false;
    let thresholdErrorText = "";
    if (isNaN(intervalThreshold)) {
        thresholdError = true;
        thresholdErrorText = "Threshold must be a number!";
    }
    if (intervalThreshold < 0) {
        thresholdError = true;
        thresholdErrorText = "Threshold cannot be negative!";
    }

    let hasError = functionError || intervalError || lowerXError || upperXError || thresholdError;

    // Solve
    const goldenRatio = (Math.sqrt(5) - 1) / 2;
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
            const d = goldenRatio * (oldUpperX - oldLowerX);
            let aX = oldUpperX - d;
            let bX = oldLowerX + d;
            let newLowerX = aX;
            let newUpperX = bX;
            let lowerFuncResult, upperFuncResult;
            try {
                lowerFuncResult = functionValue.evaluate({x : aX});
                upperFuncResult = functionValue.evaluate({x : bX});
            }
            catch {
                hasError = true;
                functionError = true;
                functionErrorText = "Only variable x is allowed!";
                solve = false;
                break;
            }
            if (lowerFuncResult > upperFuncResult) {
                newLowerX = oldLowerX;
            }
            else if (lowerFuncResult < upperFuncResult) {
                newUpperX = oldUpperX;
            }
            // Check if interval is lower than threshold
            const interval = Math.abs(newUpperX - newLowerX);
            
            results.push({
                oldLowerX,
                newLowerX,
                oldUpperX,
                newUpperX,
                d,
                aX,
                bX,
                lowerFuncResult,
                upperFuncResult,
                interval,
            });
            i++;
            if (i > 1000) {
                exceedIterError = true;
                exceedIterErrorText = "Exceeded 1000 iterations!";
                break;
            }
            if (interval < intervalThreshold){
                break;
            }
        }
        iterations = i;
    }

    // Joyride Tour
    const [runTour, setRunTour] = useState(false);
    const openHelp = () => {
        setRunTour(true)
    };
    const joyrideCallback = (state: JoyrideCallBackProps) => {
        if (state.action === "reset" || state.action === "close") {
            setRunTour(false);
        }
    };

    let params = {functionLatex, intervalThreshold, goldenRatio, iterations, exceedIterError, exceedIterErrorText, results};
    
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
                                        error={intervalError || lowerXError}
                                        label={intervalError || lowerXError ?"Error":""}
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
                                        error={intervalError || upperXError}
                                        label={intervalError || upperXError ?"Error":""}
                                        defaultValue={upperX.toString()}
                                        helperText={upperXErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="intervalThreshold-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Interval threshold:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setIntervalThreshold(parseFloat(event.target.value))}
                                        error={thresholdError}
                                        label={thresholdError?"Error":""}
                                        defaultValue={intervalThreshold.toString()}
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
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ ${oldLowerXLatex} &=& ${formatLatex(currentResult.oldLowerX)}
        \\ ${oldUpperXLatex} &=& ${formatLatex(currentResult.oldUpperX)}
        \\
        \\ d &=& R (${oldUpperXLatex} - ${oldLowerXLatex})
        \\   &=& ${formatLatex(currentResult.d)}
        \\
        \\ x_a &=& ${oldUpperXLatex} - d
        \\     &=& ${formatLatex(currentResult.aX)}
        \\ x_b &=& ${oldLowerXLatex} + d
        \\     &=& ${formatLatex(currentResult.bX)}
        \\
        \\ f(x_a) &=& ${formatLatex(currentResult.lowerFuncResult)}
        \\ f(x_b) &=& ${formatLatex(currentResult.upperFuncResult)}
        \\
        \\
        `;
        if (currentResult.lowerFuncResult > currentResult.upperFuncResult) {
            latexContent += String.raw`
            \end{array}
            \\ \hline
            \\ \text{Given that } f(x_a) > f(x_b),
            \\
            \begin{array}{lcl}
            \\ ${newLowerXLatex} &=& ${oldLowerXLatex}
            \\                   &=& ${formatLatex(currentResult.newLowerX)}
            \\ ${newUpperXLatex} &=& x_b
            \\                   &=& ${formatLatex(currentResult.newUpperX)}
            `;
        }
        else if (currentResult.lowerFuncResult < currentResult.upperFuncResult) {
            latexContent += String.raw`
            \end{array}
            \\ \hline
            \\ \text{Given that } f(x_a) < f(x_b),
            \\
            \begin{array}{lcl}
            \\ ${newLowerXLatex} &=& x_a
            \\                   &=& ${formatLatex(currentResult.newLowerX)}
            \\ ${newUpperXLatex} &=& ${oldUpperXLatex}
            \\                   &=& ${formatLatex(currentResult.newUpperX)}
            `;
        }
        else {
            latexContent += String.raw`
            \end{array}
            \\ \hline
            \\ \text{Given that } f(x_a) = f(x_b),
            \\
            \begin{array}{lcl}
            \\ ${newLowerXLatex} &=& x_a
            \\                   &=& ${formatLatex(currentResult.newLowerX)}
            \\ ${newUpperXLatex} &=& x_b
            \\                   &=& ${formatLatex(currentResult.newUpperX)}
            `;
        }
        latexContent += String.raw`
        \\
        \\ \text{Uncertainty Interval} &=& |${newUpperXLatex} - ${newLowerXLatex}|
        \\                             &=& |${formatLatex(currentResult.interval)}|
        `;
        if (currentIteration === params.iterations) {
            latexContent += String.raw`
            \end{array}
            \\
            \\ \hline
            \\ \text{Stop searching because:}
            \\
            \begin{array}{lcl}
            \\ \text{Uncertainty Interval} &<& \text{Interval Threshold}
            \\ ${formatLatex(currentResult.interval)} &<& ${formatLatex(params.intervalThreshold)}
            `;
        }
        
        latexContent += String.raw`\end{array}\end{array}`;

        graphCallback = (calculator, currentResult) => {
            calculator.current.setExpression({ id: 'function', color: Desmos.Colors.BLUE, latex: params.functionLatex});
            calculator.current.setExpression({ id: 'x_a', color: Desmos.Colors.RED, pointStyle: Desmos.Styles.POINT, label: "x_a", showLabel:true, latex:
                `(${currentResult.aX}, ${currentResult.lowerFuncResult})` });
            calculator.current.setExpression({ id: 'x_b', color: Desmos.Colors.GREEN, pointStyle: Desmos.Styles.POINT, label: "x_b", showLabel:true, latex:
                `(${currentResult.bX}, ${currentResult.upperFuncResult})` });
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
                                        onChangeCommitted={(event, value) => setCurrentIteration(value)}
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
export default OptiGoldenSearch;