import {isValidMath, mathjsToLatex, formatLatex, mathjsKeywords} from "../../utils";
import {initialMatrix21 as initialMatrix, generateGridCallback, gridTo2DArray} from "../../matrix_utils";
import React, {useState, useEffect, useRef} from "react";
import Header from "../../header/Header";
import Graph from "../../Graph";
import * as Desmos from 'desmos';

import { addStyles, EditableMathField } from 'react-mathquill';
import { parse, simplify } from 'mathjs';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

const FUNCTIONS = ['0', '4','-4 x'];
const FUNCTIONS_TEXT = ['0', '4','-4 x'];

const TOUR_STEPS: JoyrideStep[] = [
    {
        target: ".solver-type-input",
        title: "Solver Type",
        content:
        "Choose either Euler or Runge-Kutta.",
        disableBeacon: true,
    },
    {
        target: ".function-input",
        title: "Function",
        content:
        "Type a math function which only has the variables x and/or y. cos, sin and e are supported.",
    },
    {
        target: ".initialVector-input",
        title: "Initial values",
        content:
            "Specify the initial/starting values of a, b, f(a) and f(b).",
    },
    {
        target: ".iteration-input",
        title: "Iterations",
        content:
            "Specify the number of iterations to apply the selected method.",
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

function OdeShooting({methodName, markdown}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    // Solver mode: Euler or Runge
    const [solverType, setSolverType] = useState('runge');

    // Function
    const [functionLatexs, setFunctionLatexs] = useState(FUNCTIONS);
    const [functionTexts, setFunctionTexts] = useState(FUNCTIONS_TEXT);

    const functionLatexsRef= useRef();
    functionLatexsRef.current = functionLatexs;
    const functionTextsRef= useRef();
    functionTextsRef.current = functionTexts;

    const setSpecificFunctionLatex = (i, value) => {
        let modified = functionLatexsRef.current.slice();
        modified[i] = value;
        setFunctionLatexs(modified);
    }

    const setSpecificFunctionText = (i, value) => {
        let modified = functionTextsRef.current.slice();
        modified[i] = value;
        setFunctionTexts(modified);
    }

    let functionNodes = [];
    let functionErrors = Array(3).fill(false);
    let functionErrorTexts = Array(3).fill("");

    for (let i = 0; i < 3; i++){
        let funcNode;
        try {
            funcNode = parse(functionTexts[i]);
            funcNode.traverse(function (node, path, parent) {
                if (node.type === 'SymbolNode' && !mathjsKeywords.includes(node.name)) {
                    if (node.name !== 'x') {
                        throw "variableName";
                    }
                }
            });
        }
        catch(e) {
            functionErrors[i] = true;
            functionErrorTexts[i] = e === "variableName" ? "Only x variable is allowed." :  "Invalid equation!";
        }
        functionNodes.push(funcNode);
    }

    // Grid/Vector
    const columnWidth = smallScreen ? 45 : 60;
    const rowHeight = smallScreen ? 35 : 35;
    const widthPadding = smallScreen ? 10 : 100;
    const heightPadding = smallScreen ? 5 : 20;
    let [vectorState, setVectorState] = useState(initialMatrix);
    const initialVector = gridTo2DArray(vectorState.rows)[0];

    const [lowerX, upperX] = [initialVector[0], initialVector[2]]; 
    let intervalError = false;
    let intervalErrorText = "";
    if (lowerX >= upperX) {
        intervalError = true;
        intervalErrorText = "a must be lower than b!";
    }

    // Iterations
    const [iterations, setIterations] = useState(10);
    let iterError = false;
    let iterErrorText = "";
    if (!Number.isInteger(iterations) || iterations <= 0) {
        iterError = true;
        iterErrorText = "Iterations must be a positive integer!";
    }

    const functionsError = !functionErrors.every((e) => e === false);
    let hasError = functionsError || intervalError || iterError;

    // Solve
    let solve = false;
    let stepSize, xArray;
    let f1Node, f2Node;
    let results1 = {y: [], u: []}; // First solution
    let results2 = {y: [], u: []}; // Second solution
    let results = []; // Final solution
    if (functionNodes.every((n) => isValidMath(n)) && !hasError) {
        solve = true;
        stepSize = (upperX - lowerX) / iterations;
        xArray = [...Array(iterations).keys()].map((i) => stepSize * (i + 1));
        const stepHalf = stepSize / 2;
        const generateResults = (resultsArray, node, initialValues) => {
            for (let iter = 0; iter < iterations; iter++) {
                // Get current values
                const currentX = (iter === 0) ? initialVector[0] : xArray[iter - 1];
                const currentY = (iter === 0) ? initialValues[0] : resultsArray.y[iter - 1].newValue;
                const currentU = (iter === 0) ? initialValues[1] : resultsArray.u[iter - 1].newValue;

                // Find new values
                if (solverType === 'runge') {
                    // k1
                    const k1Y = currentU;
                    const k1U = node.evaluate({x: currentX, 'y': currentY, 'u': currentU});

                    // k2
                    const k2Y = currentU + k1U * stepHalf;
                    const k2U = node.evaluate({x: currentX + stepHalf, 'y': currentY + k1Y * stepHalf, 'u': currentU + k1U * stepHalf});

                    // k3
                    const k3Y = currentU + k2U * stepHalf;
                    const k3U = node.evaluate({x: currentX + stepHalf, 'y': currentY + k2Y * stepHalf, 'u': currentU + k2U * stepHalf});

                    // k4
                    const k4Y = currentU + k3U * stepSize;
                    const k4U = node.evaluate({x: currentX + stepSize, 'y': currentY + k3Y * stepSize, 'u': currentU + k3U * stepSize});
                    
                    const newY = currentY + stepSize / 6 * (k1Y + 2 * k2Y + 2 * k3Y + k4Y);
                    const newU = currentU + stepSize / 6 * (k1U + 2 * k2U + 2 * k3U + k4U);
                    resultsArray.y.push({currentValue: currentY, newValue: newY, k1: k1Y, k2: k2Y, k3: k3Y, k4: k4Y});
                    resultsArray.u.push({currentValue: currentU, newValue: newU, k1: k1U, k2: k2U, k3: k3U, k4: k4U});
                }
                else {
                    const uResult = node.evaluate({x: currentX, 'y': currentY, 'u': currentU});
                    const newY = currentY + stepSize * currentU;
                    const newU = currentU + stepSize * uResult;
                    resultsArray.y.push({currentValue: currentY, newValue: newY, functionResult: currentU});
                    resultsArray.u.push({currentValue: currentU, newValue: newU, functionResult: uResult});
                }
            }
        }
        f1Node = simplify(parse(`(${functionTexts[0]}) u + (${functionTexts[1]}) y + (${functionTexts[2]})`));
        f2Node = simplify(parse(`(${functionTexts[0]}) u + (${functionTexts[1]}) y`));
        generateResults(results1, f1Node, [initialVector[1], 0]);
        generateResults(results2, f2Node, [0, 1]);

        // Final Y
        const factor = (initialVector[3] - results1.y[iterations - 1].newValue) / results2.y[iterations - 1].newValue;
        for (let i = 0; i < iterations; i++) {
            results.push({
                currentX: (i === 0) ? initialVector[0] : xArray[i - 1],
                newX: xArray[i],
                currentY: (i === 0) ? initialVector[1] : results[i - 1].newY,
                newY: results1.y[i].newValue + factor * results2.y[i].newValue
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

    let params = {functionLatexs, solverType, initialVector, iterations, stepSize, f1Node, f2Node, xArray, results1, results2, results, smallScreen};
    
    return (
        <>
            <Header methodName={methodName} markdown={markdown} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        This method is applied in the form of &nbsp;
                        <TeX math={String.raw`y^{''} = p(x)y^{'} + q(x)y + r(x)`} />.
                    </Typography>
                    <Divider />
                    <Grid className="solver-type-input" container spacing={1} direction="row" alignItems="center" justify="center">
                        <Typography variant="h6">
                            Solver Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Typography>
                        <RadioGroup aria-label="solverType" name="solverType" value={solverType} onChange={(event)=>setSolverType(event.target.value)}>
                            <FormControlLabel value="euler" control={<Radio />} label="Euler" />
                            <FormControlLabel value="runge" control={<Radio />} label="Runge-Kutta" />
                        </RadioGroup>
                    </Grid>
                    <Grid xs item className="functions-display">
                        <Box border={1} borderRadius={5} boxShadow={2}>
                            <Collapse in={!hasError}>
                                {!functionsError && <Fade triggerOnce>
                                <TeX math={String.raw`y^{''} = (${functionLatexs[0]}) y^{'} + (${functionLatexs[1]}) y + (${functionLatexs[2]})`} block />
                                </Fade>}
                            </Collapse>
                        </Box>
                    </Grid>
                    <Grid className="function-input" container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        <TeX math={String.raw`p(x)`} />:
                                    </Typography>
                                    <EditableMathField
                                        disabled={false}
                                        latex={FUNCTIONS[0]}
                                        onChange={(mathField) => {
                                            setSpecificFunctionText(0, mathField.text());
                                            setSpecificFunctionLatex(0, mathField.latex());
                                        }}
                                        mathquillDidMount={(mathField) => {
                                        }}
                                    />
                                    <Collapse in={functionErrors[0]}>
                                        <Alert severity="error">
                                            {functionErrorTexts[0]}
                                        </Alert>
                                    </Collapse>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        <TeX math={String.raw`q(x)`} />:
                                    </Typography>
                                    <EditableMathField
                                        disabled={false}
                                        latex={FUNCTIONS[1]}
                                        onChange={(mathField) => {
                                            setSpecificFunctionText(1, mathField.text());
                                            setSpecificFunctionLatex(1, mathField.latex());
                                        }}
                                        mathquillDidMount={(mathField) => {
                                        }}
                                    />
                                    <Collapse in={functionErrors[1]}>
                                        <Alert severity="error">
                                            {functionErrorTexts[1]}
                                        </Alert>
                                    </Collapse>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        <TeX math={String.raw`r(x)`} />:
                                    </Typography>
                                    <EditableMathField
                                        disabled={false}
                                        latex={FUNCTIONS[2]}
                                        onChange={(mathField) => {
                                            setSpecificFunctionText(2, mathField.text());
                                            setSpecificFunctionLatex(2, mathField.latex());
                                        }}
                                        mathquillDidMount={(mathField) => {
                                        }}
                                    />
                                    <Collapse in={functionErrors[2]}>
                                        <Alert severity="error">
                                            {functionErrorTexts[2]}
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
                                <Collapse in={intervalError}>
                                    <Alert severity="error">
                                        {intervalErrorText}
                                    </Alert>
                                </Collapse>
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

    const initialVector = params.initialVector;
    const xArray = params.xArray;
    const currentX = (currentIteration === 1) ? initialVector[0] : xArray[currentIteration - 2];
    const newX = xArray[currentIteration - 1];
    const results1 = params.results1;
    const results2 = params.results2;

    let latexContent, graphCallback;

    if (currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else {
        latexContent =
        String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ h &=& ${formatLatex(params.stepSize)}
        \\
        \\ x_{${currentIteration}} &=& x_{${currentIteration - 1}} + h
        \\                         &=& ${formatLatex(currentX)} + ${formatLatex(params.stepSize)}
        \\                         &=& ${formatLatex(newX)}
        \end{array}
        \\
        `;
        const generateResultsLatex = (index, resultsArray, node, initialValues) => {
            latexContent += String.raw`
            \\ \hline
            \\ \text{First we find the solution to } y_${index} \text{ whereby}
            \\ y^{''}_{${index}} = u^{'} = ${mathjsToLatex(node)}
            \\ \text{with the initial values: } y_{${index}}(${initialVector[0]}) = ${initialValues[0]} \text{ and } y_{${index}}^{'}(${initialVector[0]}) = ${initialValues[1]}
            `;
            const currentYResult = resultsArray.y[currentIteration - 1];
            const currentUResult = resultsArray.u[currentIteration - 1];
            const currentY = (currentIteration === 1) ? initialValues[0] : resultsArray.y[currentIteration - 2].newValue;
            const currentU = (currentIteration === 1) ? initialValues[1] : resultsArray.u[currentIteration - 2].newValue;
            const newY = currentYResult.newValue;
            const newU = currentUResult.newValue;

            if (params.solverType === 'runge') {
                latexContent += String.raw`
                \\
                \begin{array}{lcl}
                \\ x_{${currentIteration - 1}} &=& ${formatLatex(currentX)}
                \\ y_{${currentIteration - 1}} &=& ${formatLatex(currentY)}
                \\ u_{${currentIteration - 1}} &=& ${formatLatex(currentU)}
                \\
                \\ k_{1y} &=& u_{${currentIteration - 1}}
                \\        &=& ${formatLatex(currentYResult.k1)}
                \\
                \\ k_{1u} &=& u^{'} ( x_{${currentIteration - 1}}, y_{${currentIteration - 1}}, u_{${currentIteration - 1}} )
                \\        &=& ${formatLatex(currentUResult.k1)}
                \\
                \\ k_{2y} &=& u_{${currentIteration - 1}} + \frac{h}{2} k_{1u}
                \\        &=& ${formatLatex(currentYResult.k2)}
                \\
                \\ k_{2u} &=& u^{'} ( x_{${currentIteration - 1}} + \frac{h}{2}, y_{${currentIteration - 1}} + \frac{h}{2} k_{1y}, u_{${currentIteration - 1}} + \frac{h}{2} k_{1u} )
                \\        &=& ${formatLatex(currentUResult.k2)}
                \\
                \\ k_{3y} &=& u_{${currentIteration - 1}} + \frac{h}{2} k_{2u}
                \\        &=& ${formatLatex(currentYResult.k3)}
                \\
                \\ k_{3u} &=& u^{'} ( x_{${currentIteration - 1}} + \frac{h}{2}, y_{${currentIteration - 1}} + \frac{h}{2} k_{2y}, u_{${currentIteration - 1}} + \frac{h}{2} k_{2u} )
                \\        &=& ${formatLatex(currentUResult.k3)}
                \\
                \\ k_{4y} &=& u_{${currentIteration - 1}} + h k_{3u}
                \\        &=& ${formatLatex(currentYResult.k4)}
                \\
                \\ k_{4u} &=& u^{'} ( x_{${currentIteration - 1}} + h, , u_{${currentIteration - 1}} + h k_{3u} )
                \\        &=& ${formatLatex(currentUResult.k4)}
                \\
                \\ y^{${index}}_{${currentIteration}} &=& y_{${currentIteration - 1}} + \frac{h}{6} ( k_{1y} + 2 k_{2y} + 2 k_{3y} + k_{4y} )
                \\
                \\                         &=& ${formatLatex(newY)}
                \\
                \\ u^{${index}}_{${currentIteration}} &=& u_{${currentIteration - 1}} + \frac{h}{6} ( k_{1u} + 2 k_{2u} + 2 k_{3u} + k_{4u} )
                \\
                \\                         &=& ${formatLatex(newU)}
                \end{array}
                \\
                `;
            }
            else {
                latexContent += String.raw`
                \\
                \begin{array}{lcl}
                \\ x_{${currentIteration - 1}} &=& ${formatLatex(currentX)}
                \\ y_{${currentIteration - 1}} &=& ${formatLatex(currentY)}
                \\ u_{${currentIteration - 1}} &=& ${formatLatex(currentU)}
                \\
                \\ y^{${index}}_{${currentIteration}} &=& y_{${currentIteration - 1}} + h \cdot u_{${currentIteration - 1}}
                \\                                    &=& ${formatLatex(newY)}
                \\
                \\ u^{${index}}_{${currentIteration}} &=& y_{${currentIteration - 1}} + h \cdot u^{'} ( x_{${currentIteration - 1}}, y_{${currentIteration - 1}}, u_{${currentIteration - 1}} )
                \\                                    &=& ${formatLatex(newU)}
                \end{array}
                \\
                `;
            }
        }
        generateResultsLatex("A", results1, params.f1Node, [initialVector[1], 0]);
        generateResultsLatex("B", results2, params.f2Node, [0, 1]);

        // Final Y
        latexContent += String.raw`
        \\ \hline
        \\ \text{Finally,}
        \\ \begin{array}{lcl}
        \\ y_{${currentIteration}} &=& y^{A}_{${currentIteration}} + \frac{y(b) - y^{A}_{${params.iterations}}}{y^{B}_{${params.iterations}}} y^{B}_{${currentIteration}}
        \\
        \\                         &=& ${formatLatex(results1.y[currentIteration - 1].newValue)} + \frac{${formatLatex(initialVector[3])} - ${formatLatex(results1.y[params.iterations - 1].newValue)} } {${formatLatex(results2.y[params.iterations - 1].newValue)}} ( ${formatLatex(results2.y[currentIteration - 1].newValue)} )
        \\
        \\                         &=& \colorbox{aqua}{\bf{${formatLatex(params.results[currentIteration - 1].newY)}}}
        \end{array}
        \\
        \\ \hline
        \\ \text{Note: } y_{${currentIteration}} \text{ can only be computed after } y^{A} \text{ and } y^{B} \text{ are computed for } ${initialVector[0]} < x < ${initialVector[2]}
        \\ \text{in order to obtain } y^{A}_{${params.iterations}} \text{ and }  y^{B}_{${params.iterations}}
        `;

        latexContent += String.raw`\end{array}`;

        graphCallback = (calculator, currentResult) => {
            for (let i = 0; i < params.iterations; i++){
                const r = params.results[i];
                if (i === 0) {
                    calculator.current.setExpression({ id: "starting", color: Desmos.Colors.BLUE, pointStyle: Desmos.Styles.POINT, latex:
                    `(${r.currentX}, ${r.currentY})` });
                }
                calculator.current.setExpression({ id: i, color: Desmos.Colors.BLUE, pointStyle: Desmos.Styles.POINT, latex:
                `(${r.newX}, ${r.newY})` });
            }
            calculator.current.setExpression({ id: 'line', color: Desmos.Colors.GREEN, latex:
            String.raw`(y-${currentResult.newY})/(x-${currentResult.newX})=${(currentResult.newY - currentResult.currentY)/(currentResult.newX - currentResult.currentX)} \left\{${currentResult.currentX}<x<${currentResult.newX}\right\} \left\{${currentResult.currentY}<y<${currentResult.newY}\right\}` });
            calculator.current.setExpression({ id: "initial", color: Desmos.Colors.ORANGE, pointStyle: Desmos.Styles.POINT, label: "Initial", showLabel:true, latex:
                `(${currentResult.currentX}, ${currentResult.currentY})` });
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
                <Grid className="results" container direction="column" alignItems="center" justify="center">
                    <Grid item className="iteration-slider">
                        <Slide direction="left" triggerOnce>
                            <Box id="iteration-slider" width="70vw">
                                <Slider
                                    orientation={"horizontal"}
                                    onChangeCommitted={(event, value) => {setCurrentIteration(value)}}
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
                    <Grid xs item className="graph-button">
                        <Slide direction="right" triggerOnce>
                            <Graph params={{currentIteration, graphCallback, smallScreen, ...params}} />
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
                </Grid>

            </Collapse>

        </Container>
    )
}

export default OdeShooting;