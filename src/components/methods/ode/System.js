import {isValidMath, formatLatex, mathjsKeywords} from "../../utils";
import {initialMatrix20 as initialMatrix, createNewColumn, generateGridCallback, gridTo2DArray, cloneArray} from "../../matrix_utils";
import React, {useState, useEffect, useRef} from "react";
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

const ORDER_NAMES = ['x', 'y', 'u', 'v', 'w', 'z', 'p', 'q', 'r', 's', 't'];
const ORDER_FUNCTIONS = ['u', '-x u-y'];
const ORDER_FUNCTIONS_TEXT = ['u', '-x u-y'];

const TOUR_STEPS: JoyrideStep[] = [
    {
        target: ".order-input",
        title: "Order/Number of equations",
        content:
        "Specify the number of 1st order differential equations.",
        disableBeacon: true,
    },
    {
        target: ".solver-type-input",
        title: "Solver Type",
        content:
        "Choose either Euler or Runge-Kutta.",
    },
    {
        target: ".function-input",
        title: "Functions",
        content:
        "Type each function containing the relevant variables. cos, sin and e are supported.",
    },
    {
        target: ".initialVector-input",
        title: "Initial values",
        content:
            "Specify the initial/starting values of each variable.",
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

function OdeSystem({methodName}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    // Solver mode: Euler or Runge
    const [solverType, setSolverType] = useState('runge');

    // Order/ Number of equations
    const [order, setOrder] = useState(2);
    const orderArray = [...Array(order).keys()];
    const validVariables = ORDER_NAMES.slice(0, order + 1);
    let orderError = false;
    let orderErrorText = "";
    if (isNaN(order) || !Number.isInteger(order) || order <= 0) {
        orderError = true;
        orderErrorText = "Order must be a positive integer!";
    }
    else if (order < 2) {
        orderError = true;
        orderErrorText = "Order must be 2 or higher.";
    }
    else if (order > 9) {
        orderError = true;
        orderErrorText = "Order too high! A maximum of 9 is allowed for performance reasons.";
    }

    // Functions
    const [functionLatexs, setFunctionLatexs] = useState(ORDER_FUNCTIONS.slice());
    const [functionTexts, setFunctionTexts] = useState(ORDER_FUNCTIONS_TEXT.slice());

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
    let functionErrors = orderArray.slice().fill(false);
    let functionErrorTexts = orderArray.slice().fill("");

    for (let i = 0; i < order; i++){
        let funcNode;
        try {
            funcNode = parse(functionTexts[i]);
            funcNode.traverse(function (node, path, parent) {
                if (node.type === 'SymbolNode' && !mathjsKeywords.includes(node.name)) {
                    if (!validVariables.includes(node.name)) {
                        throw "variableName";
                    }
                }
            });
        }
        catch(e) {
            functionErrors[i] = true;
            functionErrorTexts[i] = e === "variableName" ? `Only ${validVariables.join(',')} variables are allowed.` :  "Invalid equation!";
        }
        functionNodes.push(funcNode);
    }

    // Grid/Initial values
    const columnWidth = smallScreen ? 45 : 60;
    const rowHeight = smallScreen ? 35 : 35;
    const widthPadding = smallScreen ? 10 : 100;
    const heightPadding = smallScreen ? 5 : 20;

    let [vectorState, setVectorState] = useState(initialMatrix);
    let initialVector = { columns:[], rows:[{}] };
    const addVariableToVector = (variableName, variableValue) => {
        const columns = initialVector.columns;
        const rows = initialVector.rows;
        columns.push(createNewColumn(columns.length, variableName));
        let colName = `col_${columns.length}`;
        rows[0][colName] = vectorState.rows[0].hasOwnProperty(colName) ?  vectorState.rows[0][colName] : variableValue;
    }
    for (let i = 0; i <= order; i++) {
        if (i <= 9){
            addVariableToVector(ORDER_NAMES[i], 0);
        }
    }
    vectorState = initialVector;
    initialVector = gridTo2DArray(vectorState.rows)[0];

    // Step size
    const [stepSize, setStepSize] = useState(0.1);
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

    let hasError = !functionErrors.every((e) => e === false) || orderError || stepSizeError || iterError;

    // Solve
    let solve = false;
    let results = {x: [], y: []};
    orderArray.forEach((i) => {
        if (i !== 0) {
            results[ORDER_NAMES[i + 1]] = [];
        }
    });
    if (functionNodes.every((n) => isValidMath(n)) && !hasError) {
        solve = true;
        const stepHalf = stepSize / 2;
        for (let iter = 0; iter < iterations; iter++) {
            const currentX = (iter === 0) ? initialVector[0] : results.x[iter - 1];
            // Get current values
            for (let k = 0; k < order; k++) {
                const varName = ORDER_NAMES[k + 1];
                const currentValue = (iter === 0) ? initialVector[k + 1] : results[varName][iter - 1].newValue;
                results[varName].push({
                    currentValue,
                });
            }
            // Find new values
            if (solverType === 'runge') {
                // k1
                const originalScope = {x: currentX};
                validVariables.filter((value, index) => index !== 0).forEach((value, index) => {
                    originalScope[value] = results[value][iter].currentValue;
                });
                for (let k = 0; k < order; k++) {
                    const varName = ORDER_NAMES[k + 1];
                    const k1 = functionNodes[k].evaluate(originalScope);
                    results[varName][iter]['k1'] = k1;
                }
                // k2
                const k2Scope = cloneArray(originalScope);
                validVariables.forEach((value, index) => {
                    if (index === 0) {
                        k2Scope[value] = k2Scope[value] + stepHalf;
                    }
                    else {
                        k2Scope[value] = k2Scope[value] + stepHalf * results[value][iter].k1;
                    }
                });
                for (let k = 0; k < order; k++) {
                    const varName = ORDER_NAMES[k + 1];
                    const k2 = functionNodes[k].evaluate(k2Scope);
                    results[varName][iter]['k2'] = k2;
                }
                // k3
                const k3Scope = cloneArray(originalScope);
                validVariables.forEach((value, index) => {
                    if (index === 0) {
                        k3Scope[value] = k3Scope[value] + stepHalf;
                    }
                    else {
                        k3Scope[value] = k3Scope[value] + stepHalf * results[value][iter].k2;
                    }
                });
                for (let k = 0; k < order; k++) {
                    const varName = ORDER_NAMES[k + 1];
                    const k3 = functionNodes[k].evaluate(k3Scope);
                    results[varName][iter]['k3'] = k3;
                }
                // k4
                const k4Scope = cloneArray(originalScope);
                validVariables.forEach((value, index) => {
                    if (index === 0) {
                        k4Scope[value] = k4Scope[value] + stepSize;
                    }
                    else {
                        k4Scope[value] = k4Scope[value] + stepSize * results[value][iter].k3;
                    }
                });
                for (let k = 0; k < order; k++) {
                    const varName = ORDER_NAMES[k + 1];
                    const k4 = functionNodes[k].evaluate(k4Scope);
                    results[varName][iter]['k4'] = k4;
                }

                // Find new values
                for (let k = 0; k < order; k++) {
                    const varName = ORDER_NAMES[k + 1];
                    const currentValue = results[varName][iter].currentValue;
                    const newValue = currentValue + stepSize / 6 * (results[varName][iter]['k1']
                                                                    + 2 * results[varName][iter]['k2']
                                                                    + 2 * results[varName][iter]['k3']
                                                                    + results[varName][iter]['k4']);
                    results[varName][iter] = {...results[varName][iter], newValue};
                }
            }
            else {
                for (let k = 0; k < order; k++) {
                    const varName = ORDER_NAMES[k + 1];
                    const currentValue = results[varName][iter].currentValue;
                    const scope = {x: currentX, [varName]: currentValue};
                    validVariables.filter((value, index) => index !== 0 && index !== k + 1 ).forEach((value, index) => {
                        scope[value] = results[value][iter].currentValue;
                    });
                    const functionResult = functionNodes[k].evaluate(scope);
                    const newValue = currentValue + stepSize * functionResult;
                    results[varName][iter] = {...results[varName][iter], newValue, functionResult};
                }
            }
            const newX = currentX + stepSize;
            results.x.push(newX);
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

    let params = {functionLatexs, solverType, order, validVariables, initialVector, stepSize, iterations, results, smallScreen};
    return (
        <>
            <Header methodName = {methodName} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        This method is applied to 1st order differential equations of the form &nbsp;
                        <TeX math={String.raw`\frac{dy}{dx}=f(x)`} />.
                    </Typography>
                    <Grid container spacing={0} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="order-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Order / Number of equations:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setOrder(parseInt(event.target.value))}
                                        error={orderError}
                                        label={orderError?"Error":""}
                                        defaultValue={order.toString()}
                                        helperText={orderErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item className="solver-type-input" container spacing={1} direction="row" alignItems="center" justify="center">
                            <Typography variant="h6">
                                Solver Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Typography>
                            <RadioGroup aria-label="solverType" name="solverType" value={solverType} onChange={(event)=>setSolverType(event.target.value)}>
                                <FormControlLabel value="euler" control={<Radio />} label="Euler" />
                                <FormControlLabel value="runge" control={<Radio />} label="Runge-Kutta" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid className="function-input" container spacing={1} direction="row" alignItems="center" justify="center">
                        {order < 10 && orderArray.map((i) =>
                            <Grid key={"function" + i} xs item>
                                <Card className={styleClasses.card}>
                                    <CardContent className={styleClasses.cardContent}>
                                        <Typography variant="h6">
                                            <TeX math={i===0 ? String.raw`y^{'}, \frac{dy}{dx}` : String.raw`${ORDER_NAMES[i + 1]}^{'}, \frac{d${ORDER_NAMES[i + 1]}}{dx}`} />
                                        </Typography>
                                        <EditableMathField
                                            disabled={false}
                                            latex={ORDER_FUNCTIONS[i]}
                                            onChange={(mathField) => {
                                                setSpecificFunctionText(i, mathField.text());
                                                setSpecificFunctionLatex(i, mathField.latex());
                                            }}
                                            mathquillDidMount={(mathField) => {
                                            }}
                                        />
                                        <Collapse in={functionErrors[i]}>
                                            <Alert severity="error">
                                                {functionErrorTexts[i]}
                                            </Alert>
                                        </Collapse>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}
                    </Grid>

                    <Grid className="initialVector-input" container spacing={0} direction="row" alignItems="center" justify="center">
                        <Grid item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Initial Values:
                                    </Typography>
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
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
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
    let latexContent, graphCallback;

    if (currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else {
        const results = params.results;
        const currentX = (currentIteration === 1) ? params.initialVector[0] : results.x[currentIteration - 2];
        const newX = results.x[currentIteration - 1];

        latexContent =
        String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ x_{${currentIteration}} &=& x_{${currentIteration - 1}} + h
        \\                         &=& ${formatLatex(currentX)} + ${formatLatex(params.stepSize)}
        \\                         &=& ${formatLatex(newX)}
        \end{array}
        `;
        if (params.solverType === 'runge') {
            // k1
            latexContent += String.raw`
            \\
            \\ \hline`;
            for (let k = 0; k < params.order; k++) {
                const varName = ORDER_NAMES[k + 1];
                const currentResult = results[varName][currentIteration - 1];
                const argumentsLatex = params.validVariables.map((value, index) => {
                    return String.raw`${value}_{${currentIteration - 1}}`;
                }).join(',');
                latexContent += String.raw`
                \\ \begin{array}{lcl}
                \\ k_{1${varName}} &=& ${varName}^{'} ( ${argumentsLatex} )
                \\                 &=& ${formatLatex(currentResult.k1)}
                \end{array}
                `;
            }

            // k2
            latexContent += String.raw`
            \\
            \\ \hline`;
            for (let k = 0; k < params.order; k++) {
                const varName = ORDER_NAMES[k + 1];
                const currentResult = results[varName][currentIteration - 1];
                const argumentsLatex = params.validVariables.map((value, index) => {
                    return String.raw`${value}_{${currentIteration - 1}} + ${index === 0 ? '' : `k_{1${value}}`} (\frac{h}{2})`;
                }).join(',');
                latexContent += String.raw`
                \\ \begin{array}{lcl}
                \\ k_{2${varName}} &=& ${varName}^{'} ( ${argumentsLatex} )
                \\                 &=& ${formatLatex(currentResult.k2)}
                \end{array}
                `;
            }

            // k3
            latexContent += String.raw`
            \\
            \\ \hline`;
            for (let k = 0; k < params.order; k++) {
                const varName = ORDER_NAMES[k + 1];
                const currentResult = results[varName][currentIteration - 1];
                const argumentsLatex = params.validVariables.map((value, index) => {
                    return String.raw`${value}_{${currentIteration - 1}} + ${index === 0 ? '' : `k_{2${value}}`} (\frac{h}{2})`;
                }).join(',');
                latexContent += String.raw`
                \\ \begin{array}{lcl}
                \\ k_{3${varName}} &=& ${varName}^{'} ( ${argumentsLatex} )
                \\                 &=& ${formatLatex(currentResult.k3)}
                \end{array}
                `;
            }

            // k4
            latexContent += String.raw`
            \\
            \\ \hline`;
            for (let k = 0; k < params.order; k++) {
                const varName = ORDER_NAMES[k + 1];
                const currentResult = results[varName][currentIteration - 1];
                const argumentsLatex = params.validVariables.map((value, index) => {
                    return String.raw`${value}_{${currentIteration - 1}} + ${index === 0 ? '' : `k_{3${value}}`} (h)`;
                }).join(',');
                latexContent += String.raw`
                \\ \begin{array}{lcl}
                \\ k_{4${varName}} &=& ${varName}^{'} ( ${argumentsLatex} )
                \\                 &=& ${formatLatex(currentResult.k4)}
                \end{array}
                `;
            }

            // Find new values
            for (let k = 0; k < params.order; k++) {
                const varName = ORDER_NAMES[k + 1];
                const currentResult = results[varName][currentIteration - 1];
                latexContent += String.raw`
                \\
                \\ \hline
                \\ ${varName}^{'} = \frac{d${varName}}{dx} = ${params.functionLatexs[k]}
                \\
                \begin{array}{lcl}
                \\ ${varName}_{${currentIteration}} &=& ${varName}_{${currentIteration - 1}} + \frac{h}{6} ( k_{1${varName}} + 2 k_{2${varName}} + 2 k_{3${varName}} + k_{4${varName}} )
                \\
                \\                         &=& ${formatLatex(currentResult.currentValue)} + \frac{${params.stepSize}}{6} ( ${formatLatex(currentResult.k1)} + 2 (${formatLatex(currentResult.k2)}) + 2 (${formatLatex(currentResult.k3)}) + ${formatLatex(currentResult.k4)} )
                \\
                \\                         &=& ${formatLatex(currentResult.newValue)}
                \end{array}
                `;
            }
        }
        else {
            for (let k = 0; k < params.order; k++) {
                const varName = ORDER_NAMES[k + 1];
                const currentResult = results[varName][currentIteration - 1];
                const argumentsLatex = params.validVariables.map((value, index) => {
                    return String.raw`${value}_{${currentIteration - 1}}`;
                }).join(',');
                latexContent += String.raw`
                \\
                \\ \hline
                \\ ${varName}^{'} = \frac{d${varName}}{dx} = ${params.functionLatexs[k]}
                \\
                \begin{array}{lcl}
                \\ ${varName}_{${currentIteration}} &=& ${varName}_{${currentIteration - 1}} + h \cdot ${varName}^{'} ( ${argumentsLatex} )
                \\
                \\                         &=& ${formatLatex(currentResult.currentValue)} + ${formatLatex(params.stepSize)} ( ${formatLatex(currentResult.functionResult)} )
                \\
                \\                         &=& ${formatLatex(currentResult.newValue)}
                \end{array}
                `;
            }
        }
        latexContent += String.raw`\end{array}`;

        graphCallback = (calculator, currentResult, currentIteration) => {
            for (let i = 0; i < params.iterations; i++){
                const r = params.results['y'][i];
                if (i === 0) {
                    calculator.current.setExpression({ id: "starting", color: Desmos.Colors.BLUE, pointStyle: Desmos.Styles.POINT, latex:
                    `(${params.initialVector[0]}, ${r.currentValue})` });
                }
                calculator.current.setExpression({ id: i, color: Desmos.Colors.BLUE, pointStyle: Desmos.Styles.POINT, latex:
                `(${results.x[i]}, ${r.newValue})` });
            }
            const currentX = (currentIteration === 1) ? params.initialVector[0] : results.x[currentIteration - 2];
            const newX = results.x[currentIteration - 1];
            calculator.current.setExpression({ id: 'line', color: Desmos.Colors.GREEN, latex:
            String.raw`(y-${currentResult.newValue})/(x-${newX})=${(currentResult.newValue - currentResult.currentValue)/(newX - currentX)} \left\{${currentX}<x<${newX}\right\} \left\{${currentResult.currentValue}<y<${currentResult.newValue}\right\}` });
            calculator.current.setExpression({ id: "initial", color: Desmos.Colors.ORANGE, pointStyle: Desmos.Styles.POINT, label: "Initial", showLabel:true, latex:
                `(${currentX}, ${currentResult.currentValue})` });
            calculator.current.setExpression({ id: "final", color: Desmos.Colors.RED, pointStyle: Desmos.Styles.POINT, label: "Final", showLabel:true, latex:
                `(${newX}, ${currentResult.newValue})` });
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
                            <Graph params={{currentIteration, graphCallback, smallScreen, ...params, results: params.results['y']}} />
                        </Slide>
                    </Grid>
                </Grid>

            </Collapse>

        </Container>
    )
}

export default OdeSystem;