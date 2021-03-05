import {isValidMath, formatLatex, mathjsKeywords} from "../../utils";
import {initialMatrix18 as initialMatrix, generateGridCallback, gridTo2DArray} from "../../matrix_utils";
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

import ReactDataGrid from 'react-data-grid';

const TOUR_STEPS: JoyrideStep[] = [
    {
        target: ".function-input",
        title: "Function",
        content:
        "Type a math function which only has the variables x and/or y. cos, sin and e are supported.",
        disableBeacon: true,
    },
    {
        target: ".initialVector-input",
        title: "Initial x and y value",
        content:
            "Specify the initial/starting value of x and y.",
    },
    {
        target: ".stepSize-input",
        title: "Step Size",
        content:
            "Specify the step size, h.",
    },
    {
        target: ".iteration-input",
        title: "Iterations",
        content:
            "Specify the number of iterations to apply the method.",
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

function OdeMultistep({methodName, markdown}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    // Function
    const [functionLatex, setFunctionLatex] = useState(String.raw`x+y`);
    const [functionText, setFunctionText] = useState('');

    let functionNode;
    let functionError = false;
    let functionErrorText = "";
    let variables = new Set(); // Unique set of variables
    try {
        functionNode = parse(functionText);
        functionNode.traverse(function (node, path, parent) {
            if (node.type === 'SymbolNode' && !mathjsKeywords.includes(node.name)) {
                if (node.name !== 'x' && node.name !== 'y') {
                    throw "variableName";
                }
                variables.add(node.name);
            }
        });
        variables = [...variables].sort(); // Alphabetical order
    }
    catch(e) {
        functionError = true;
        functionErrorText = e === "variableName" ? "Only x and y variables are allowed." :  "Invalid equation!";
    }

    // Grid/Vector
    const columnWidth = smallScreen ? 45 : 60;
    const rowHeight = smallScreen ? 35 : 35;
    const widthPadding = smallScreen ? 10 : 100;
    const heightPadding = smallScreen ? 5 : 20;
    let [vectorState, setVectorState] = useState(initialMatrix);
    const initialVector = gridTo2DArray(vectorState.rows)[0];

    // Step size
    const [stepSize, setStepSize] = useState(0.2);
    let stepSizeError = false;
    let stepSizeErrorText = "";
    if (isNaN(stepSize)) {
        stepSizeError = true;
        stepSizeErrorText = "Step size must be a number!";
    }
    else if (stepSize <= 0) {
        stepSizeError = true;
        stepSizeErrorText = "Step size must be greater than zero!";
    }

    // Iterations
    const [iterations, setIterations] = useState(10);
    let iterError = false;
    let iterErrorText = "";
    if (!Number.isInteger(iterations) || iterations <= 0) {
        iterError = true;
        iterErrorText = "Iterations must be a positive integer!";
    }

    let hasError = functionError || stepSizeError || iterError;

    // Solve
    let solve = false;
    let initialYValues = [initialVector[1]];
    let rungeResults = [];
    let results = [];
    if (isValidMath(functionNode) && !hasError) {
        solve = true;
        const stepHalf = stepSize / 2;
        for (let i = 1; i <= 3; i++) {
            // Runge-Kutta for the first 4 y values
            const currentX = (i === 1) ? initialVector[0] : rungeResults[i - 2].newX;
            const newX = currentX + stepSize;
            const currentY = initialYValues[i - 1];
            const k1 = functionNode.evaluate({x: currentX, y: currentY});
            const k2 = functionNode.evaluate({x: currentX + stepHalf, y: currentY + k1 * stepHalf});
            const k3 = functionNode.evaluate({x: currentX + stepHalf, y: currentY + k2 * stepHalf});
            const k4 = functionNode.evaluate({x: currentX + stepSize, y: currentY + k3 * stepSize});
            const newY = currentY + stepSize / 6 * (k1 + 2 * k2 + 2 * k3 + k4);
            initialYValues.push(newY);
            rungeResults.push({
                currentX,
                currentY,
                newX,
                newY,
                k1,
                k2,
                k3,
                k4,
            });
        }
        for (let iter = 0; iter < iterations; iter++) {
            const currentX = (iter === 0) ? initialVector[0] + stepSize * 3 : results[iter - 1].newX;
            const newX = currentX + stepSize;
            let yValues;
            if (iter < 4) {
                yValues = [...initialYValues.slice(iter, 4), ...results.slice(0, iter).map((v)=>v.newY)];
            }
            else {
                yValues = results.slice(iter - 4, iter).map((v)=>v.newY);
            }
            const f3 = functionNode.evaluate({x: currentX, y: yValues[3]});
            const f2 = functionNode.evaluate({x: currentX - stepSize, y: yValues[2]});
            const f1 = functionNode.evaluate({x: currentX - 2 * stepSize, y: yValues[1]});
            const f0 = functionNode.evaluate({x: currentX - 3 * stepSize, y: yValues[0]});
            const tempY = yValues[3] + stepSize / 24 * (55 * f3 - 59 * f2 + 37 * f1 - 9 * f0);
            const fTemp = functionNode.evaluate({x: newX, y: tempY});
            const newY = yValues[3] + stepSize / 24 * (9 * fTemp + 19 * f3 - 5 * f2 + f1);
            results.push({
                currentX,
                yValues,
                newX,
                newY,
                tempY,
                fTemp,
                f3,
                f2,
                f1,
                f0,
            });
        }
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

    let params = {functionLatex, initialVector, stepSize, iterations, initialYValues, rungeResults, results, smallScreen};
    
    return (
        <>
            <Header methodName={methodName} markdown={markdown} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        This method is applied in the form of &nbsp;
                        <TeX math={String.raw`\frac{dy}{dx}=f(x)`} />.
                    </Typography>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="function-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Function, <TeX math={String.raw`f(x, y)`} />:
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

                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="initialVector-input" container spacing={1} direction="column" alignItems="center" justify="center">
                            <Grid xs item>
                                <Typography variant="h6">
                                    Initial Values:
                                </Typography>
                            </Grid>
                            <Grid xs item container spacing={0} direction="row" alignItems="center" justify="center">
                                <Grid key={1} item className={styleClasses.overflow}>
                                    <ReactDataGrid
                                        columns={vectorState.columns}
                                        rowGetter={i => vectorState.rows[i]}
                                        rowsCount={vectorState.rows.length}
                                        onGridRowsUpdated={generateGridCallback(vectorState, setVectorState)}
                                        enableCellSelect={true}
                                        minColumnWidth={columnWidth}
                                        minWidth={columnWidth * vectorState.columns.length + widthPadding}
                                        rowHeight={rowHeight}
                                        minHeight={rowHeight * (vectorState.rows.length + 1) + heightPadding}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs item className="stepSize-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Step size, h:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setStepSize(parseFloat(event.target.value))}
                                        error={stepSizeError}
                                        label={stepSizeError?"Error":""}
                                        defaultValue={stepSize.toString()}
                                        helperText={stepSizeErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item className="iteration-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Iterations:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setIterations(parseInt(event.target.value))}
                                        error={iterError}
                                        label={iterError?"Error":""}
                                        defaultValue={iterations.toString()}
                                        helperText={iterErrorText}
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

    let hasError = false;
    let errorText = "";

    let currentResult = params.results[currentIteration - 1];

    let latexContent, graphCallback;

    if (currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else {
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \\ \frac{dy}{dx} = ${params.functionLatex}
        \\`;
        if (currentIteration === 1) {
            latexContent += String.raw`
            \begin{array}{lcl}
            \\ \text{First, we apply 4th order Runge-Kutta to obtain } y_{0}, y_{-1}, \text{ and } y_{-2}:
            \end{array}
            \\
            \begin{array}{lcl}
            \\ x_{-3} &=& ${params.rungeResults[0].currentX}, \\ y_{-3} &=& ${params.rungeResults[0].currentY}`;
            for (let i = 1; i <= 3; i++) {
                const currentRungeResult = params.rungeResults[i - 1];
                // Runge-Kutta for the first 4 y values
                latexContent += String.raw`
                \\
                \\ x_{${i - 3}} &=& ${formatLatex(currentRungeResult.newX)}, \\ y_{${i - 3}} &=& y_{${i - 4}} + \frac{h}{6} ( k_1 + 2 k_2 + 2 k_3 + k_4 )
                \\
                \\              &=& ${formatLatex(currentRungeResult.currentY)} + \frac{${params.stepSize}}{6} ( ${formatLatex(currentRungeResult.k1)} + 2 (${formatLatex(currentRungeResult.k2)}) + 2 (${formatLatex(currentRungeResult.k3)}) + ${formatLatex(currentRungeResult.k4)} )
                \\
                \\              &=& ${formatLatex(currentRungeResult.newY)}`;
            }
            latexContent += String.raw`
            \end{array}
            \\
            \\ \hline
            \\ \text{Now, we can initiate the Adams-Moulton method.}`;
        }

        latexContent += String.raw`
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ x_{${currentIteration}} &=& x_{${currentIteration - 1}} + h
        \\                         &=& ${formatLatex(currentResult.newX)}
        \end{array}
        \\
        \begin{array}{lcl}
        \\ y_{${currentIteration}}^{*} &=& y_{${currentIteration - 1}} + \frac{h}{24} ( 55 f(x_{${currentIteration - 1}}, y_{${currentIteration - 1}})
                                                                                        - 59 f(x_{${currentIteration - 2}}, y_{${currentIteration - 2}})
                                                                                        + 37 f(x_{${currentIteration - 3}}, y_{${currentIteration - 3}})
                                                                                        - 9 f(x_{${currentIteration - 4}}, y_{${currentIteration - 4}}) )
        \\
        \\      &=& ${formatLatex(currentResult.yValues[3])} + \frac{${formatLatex(params.stepSize)}}{24} [ 55 (${formatLatex(currentResult.f3)})
                                                                                                           - 59 (${formatLatex(currentResult.f2)})
                                                                                                           + 37 (${formatLatex(currentResult.f1)})
                                                                                                           - 9 (${formatLatex(currentResult.f0)}) ]
        \\
        \\      &=& ${formatLatex(currentResult.tempY)}
        \end{array}
        \\
        \begin{array}{lcl}
        \\ y_{${currentIteration}} &=& y_{${currentIteration - 1}} + \frac{h}{24} ( 9 f(x_{${currentIteration}}, y_{${currentIteration}}^{*})
                                                                                    + 19 f(x_{${currentIteration - 1}}, y_{${currentIteration - 1}})
                                                                                    - 5 f(x_{${currentIteration - 2}}, y_{${currentIteration - 2}})
                                                                                    + 1 f(x_{${currentIteration - 3}}, y_{${currentIteration - 3}}) )
        \\
        \\      &=& ${formatLatex(currentResult.yValues[3])} + \frac{${formatLatex(params.stepSize)}}{24} [ 9 (${formatLatex(currentResult.fTemp)})
                                                                                                    + 19 (${formatLatex(currentResult.f3)})
                                                                                                    - 5 (${formatLatex(currentResult.f2)})
                                                                                                    + 1 (${formatLatex(currentResult.f1)}) ]
        \\
        \\      &=& ${formatLatex(currentResult.newY)}
        \end{array}\end{array}`;

        graphCallback = (calculator, currentResult) => {
            for (let i = 0; i < 3; i++) {
                const r = params.rungeResults[i];
                calculator.current.setExpression({ id: "Runge"+i, color: Desmos.Colors.BLUE, pointStyle: Desmos.Styles.POINT, latex:
                `(${r.currentX}, ${r.currentY})` });
            }
            for (let i = 0; i < params.iterations; i++){
                const r = params.results[i];
                if (i === 0) {
                    calculator.current.setExpression({ id: "starting", color: Desmos.Colors.BLUE, pointStyle: Desmos.Styles.POINT, latex:
                    `(${r.currentX}, ${r.yValues[3]})` });
                }
                calculator.current.setExpression({ id: i, color: Desmos.Colors.BLUE, pointStyle: Desmos.Styles.POINT, latex:
                `(${r.newX}, ${r.newY})` });
            }
            const currentY = currentResult.yValues[3];
            calculator.current.setExpression({ id: 'line', color: Desmos.Colors.GREEN, latex:
            String.raw`(y-${currentResult.newY})/(x-${currentResult.newX})=${(currentResult.newY - currentY)/(currentResult.newX - currentResult.currentX)} \left\{${currentResult.currentX}<x<${currentResult.newX}\right\} \left\{${currentY}<y<${currentResult.newY}\right\}` });
            calculator.current.setExpression({ id: "initial", color: Desmos.Colors.ORANGE, pointStyle: Desmos.Styles.POINT, label: "Initial", showLabel:true, latex:
                `(${currentResult.currentX}, ${currentY})` });
            calculator.current.setExpression({ id: "final", color: Desmos.Colors.RED, pointStyle: Desmos.Styles.POINT, label: "Final", showLabel:true, latex:
                `(${currentResult.newX}, ${currentResult.newY})` });
        }
    }

    const smallScreen = params.smallScreen;
    
    return (
        <Container className={styleClasses.container}>

            <Collapse in={hasError}>
                <Alert severity="error">
                    {errorText}
                </Alert>
            </Collapse>
            <Collapse in={!hasError}>
                <Grid className="results" container direction={smallScreen?"column":"row"} alignItems="center" justify="space-evenly">
                    <Grid xs item className="iteration-slider">
                        <Slide direction="left" triggerOnce>
                            <Box id="iteration-slider" height={smallScreen?null:"20rem"} width={smallScreen?"70vw":null}>
                                <Slider
                                    orientation={smallScreen?"horizontal":"vertical"}
                                    onChange={(event, value) => {setCurrentIteration(value)}}
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

            </Collapse>

        </Container>
    )
}

export default OdeMultistep;