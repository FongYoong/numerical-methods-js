import {isValidMath, mathjsToLatex, formatLatex} from "../../utils";
import {initialMatrix17, generateGridCallback, createNewColumn, gridTo2DArray, matrixToLatex} from "../../matrix_utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";

import { addStyles, EditableMathField } from 'react-mathquill';
import { parse, derivative, simplify, subtract, norm } from 'mathjs';
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
        "Type a math function with multiple variables. Variable names must contain only one alphabet, such as x, y, z etc.",
        disableBeacon: true,
    },
    {
        target: ".variables-display",
        title: "Variables",
        content:
        "The variables of the function are displayed here.",
    },
    {
        target: ".vector-input",
        title: "Initial Vector",
        content:
        "Specify the initial values here.",
    },
    {
        target: ".errorThreshold-input",
        title: "Error Threshold",
        content:
            "Specify the minimum error threshold when finding the roots.",
    },
    {
        target: ".iteration-input",
        title: "Iterations",
        content:
            "Specify the number of iterations to apply the gradient method.",
    },
    {
        target: ".iteration-slider",
        title: "Iteration slider",
        content:
            "Change the slider to view the result of any iteration.",
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

function OptiGradient({methodName}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
    // 2xy+2x-x^2-2y^2
    // 2\left(x+y\right)^2 + \left(x-y\right)^2 + 3x + 2y
    const [functionLatex, setFunctionLatex] = useState(String.raw`2\left(x+y\right)^2 + \left(x-y\right)^2 + 3x + 2y`);
    const [functionText, setFunctionText] = useState('');

    let functionNode;
    let functionError = false;
    let functionErrorText = "";
    const keywords = ["cos", "sin", "e"];
    let variables = new Set(); // Unique set of variables
    try {
        functionNode = parse(functionText);
        functionNode.traverse(function (node, path, parent) {
            if (node.type === 'SymbolNode' && !keywords.includes(node.name)) {
                if (node.name.length > 1) {
                    throw "variableName";
                }
                variables.add(node.name);
            }
        });
        variables = [...variables].sort(); // Alphabetical order
    }
    catch(e) {
        functionError = true;
        functionErrorText = e === "variableName" ? "Variable names must contain only one alphabet! x, y, z etc" :  "Invalid equation!";
    }

    // Grid
    const columnWidth = smallScreen ? 45 : 60;
    const rowHeight = smallScreen ? 35 : 35;
    const widthPadding = smallScreen ? 10 : 100;
    const heightPadding = smallScreen ? 5 : 20;    
    
    let [vectorState, setVectorState] = useState(initialMatrix17);

    let initialVector = {   columns:[], rows:[{}]    };
    const addVariableToVector = (variableName, variableValue) => {
        const columns = initialVector.columns;
        const rows = initialVector.rows;
        columns.push(createNewColumn(columns.length, variableName));
        let colName = `col_${columns.length}`;
        rows[0][colName] = vectorState.rows[0].hasOwnProperty(colName) ?  vectorState.rows[0][colName] : variableValue;
    }
    for (let v of variables) {
        addVariableToVector(v, 0);
    }
    vectorState = initialVector;

    // Error threshold
    const [errorThreshold, setErrorThreshold] = useState(0.005);
    let thresholdError = false;
    let thresholdErrorText = "";
    if (errorThreshold < 0) {
        thresholdError = true;
        thresholdErrorText = "Threshold cannot be negative!";
    }

    // Iterations
    const [iterations, setIterations] = useState(5);
    let iterError = false;
    let iterErrorText = "";
    if (!Number.isInteger(iterations) || iterations <= 0) {
        iterError = true;
        iterErrorText = "Iterations must be a positive integer!";
    }

    let hasError = functionError || iterError;

    // Solve
    let solve = false;
    let derivNodes = {};
    let results = [];

    if (isValidMath(functionNode) && !hasError && variables.length > 0) {
        solve = true;
        for (let v of variables) {
            derivNodes[v] = derivative(functionText, v);
        }
        /*
        1. Get derivatives and substitute initial or previous value
        2. Multiply deriv by a variable, t, and add to the initial or previous value
        3. Substitute the above into the corresponding variables of the original function
        4. Differentiate with respect to variable, t, and set equal to zero.
        5. Find maximum value of t.
        6. Add to initial value and get new position
        7. Repeat for the specified iterations and show error too
        */
        for (let iter = 0; iter < iterations; iter++) {
            const previousVector = (iter === 0) ? gridTo2DArray(vectorState.rows)[0]: results[iter - 1].newVector;
            let derivScope = {};
            variables.forEach((element, index) => {
                derivScope[element] = previousVector[index];
            });
            let derivResult = [];
            for (let v of variables) {
                derivResult.push(derivNodes[v].evaluate(derivScope));
            }
            let directionNodes = {};
            variables.forEach((element, index) => {
                directionNodes[element] = simplify(parse(String.raw`${previousVector[index]} + t*(${derivResult[index]})`));
            });
            const transformedFunction = functionNode.transform(function (node, path, parent) {
                if (node.isSymbolNode && !keywords.includes(node.name)) {
                    return directionNodes[node.name];
                }
                else {
                    return node;
                }
            });
            const simplifiedFunction = simplify(transformedFunction);
            const simplifiedFunctionDeriv = derivative(simplifiedFunction, 't');
            const simplifiedFunctionDeriv2 = derivative(simplifiedFunctionDeriv, 't');
            let rootT = 0;
            while (simplifiedFunctionDeriv.evaluate({t: rootT}) === 0) {
                rootT = Math.random();
            }
            let newtonIter = 1;
            while(true) {
                const oldT = rootT;
                const funcValue = simplifiedFunctionDeriv.evaluate({t: rootT});
                const derivValue = simplifiedFunctionDeriv2.evaluate({t: rootT});
                if (derivResult === 0) {
                    break;
                }
                rootT = rootT - funcValue / derivValue;
                let errorX = Math.abs(rootT - oldT);
                if (errorX < errorThreshold || newtonIter > 50) {
                    break;
                }
                newtonIter++;
            }
            const newVector = variables.map((element, index) => {
                return directionNodes[element].evaluate({t: rootT});
            });
            const errorMagnitude = norm(subtract(newVector, previousVector), 2);
            results.push({
                previousVector,
                derivResult,
                directionNodes,
                transformedFunction,
                simplifiedFunction,
                simplifiedFunctionDeriv,
                newtonIter,
                rootT,
                newVector,
                errorMagnitude,
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

    let params = {functionNode, variables, derivNodes, errorThreshold, iterations, results};
    
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
                                            setFunctionText(mathField.text());
                                        }}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item className="variables-display">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Variables:
                                    </Typography>
                                    <Collapse in={functionError}>
                                        <Alert severity="error">
                                            {functionErrorText}
                                        </Alert>
                                    </Collapse>
                                    <Collapse in={!functionError}>
                                        {!functionError && <Fade triggerOnce>
                                            <Typography variant="h6">
                                                {[...variables].join(', ')}
                                            </Typography>
                                        </Fade>}
                                    </Collapse>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>


                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="vector-input" container spacing={1} direction="column" alignItems="center" justify="center">
                            <Grid xs item>
                                <Typography variant="h6">
                                    Initial Point, <TeX math={String.raw`X^{(0)}`} />:
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
                        {solve && <Steps smallScreen={smallScreen} params={params}/>}
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

function Steps({smallScreen, params}) {

    const styleClasses = useStyles();

    const [currentIteration, setCurrentIteration] = useState(1);

    let hasError = false;
    let errorText = "";

    const results = params.results;
    const variables = params.variables;
    const currentResult = results[currentIteration - 1];

    let latexContent;

    if (currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else {
        
        latexContent =
        String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ f(${variables.join(",")}) = ${mathjsToLatex(params.functionNode)}
        \\
        \\ X^{(${currentIteration - 1})} = ${matrixToLatex([currentResult.previousVector])}
        \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}`;

        variables.forEach((v, index) => {
            latexContent += String.raw`
            \\ f_${v} &=& ${mathjsToLatex(params.derivNodes[v])}
            \\ f_${v}(X^{(${currentIteration - 1})}) &=& ${formatLatex(currentResult.derivResult[index])}
            \\ 
            `;
        });

        latexContent += String.raw`
        \\ \nabla f &=& ${matrixToLatex([currentResult.derivResult])}
        \\ \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ X^{(${currentIteration})} &=& X^{(${currentIteration - 1})} + t \cdot \nabla f
        \\
        \\                           &=& ${matrixToLatex([currentResult.previousVector])} + t \cdot ${matrixToLatex([currentResult.derivResult])}
        \\
        \\                           &=& \left[\begin{matrix}
        `;
        variables.forEach((v, index) => {
            latexContent += String.raw`
            ${mathjsToLatex(currentResult.directionNodes[v])}
            `;
            if (index !== variables.length - 1) {
                latexContent += ',&';
            }
        });
        latexContent += String.raw`
        \end{matrix}\right]
        \\ \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ f(X^{(${currentIteration})}) &=& ${mathjsToLatex(currentResult.transformedFunction)}
        \\
        \\                              &=& ${mathjsToLatex(currentResult.simplifiedFunction)}
        \\ \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ \frac{df(X^{(${currentIteration})})}{dt} &=& 0
        \\
        \\ ${mathjsToLatex(currentResult.simplifiedFunctionDeriv)} &=& 0
        \\ \end{array}
        \\
        \\ \text{Using the Newton-Rhapson method with error threshold of ${params.errorThreshold},}
        \\ \text{the solution to } \frac{df(X^{(${currentIteration})})}{dt} = 0 \text{ after ${currentResult.newtonIter} iterations is:}
        \\
        \\ t^* = ${formatLatex(currentResult.rootT)}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ X^{(${currentIteration})} &=& X^{(${currentIteration - 1})} + t^* \cdot \nabla f
        \\
        \\                           &=& ${matrixToLatex([currentResult.previousVector])} + ${formatLatex(currentResult.rootT)} \cdot ${matrixToLatex([currentResult.derivResult])}
        \\
        \\                           &=& ${matrixToLatex([currentResult.newVector])}
        `;
        //  ${matrixToLatex([variables.map((v) => currentResult.directionNodes[v])])}

        latexContent += String.raw`
        \end{array}\end{array}
        `
    }
    return (
        <Container className={styleClasses.container}>

            <Collapse in={hasError}>
                <Alert severity="error">
                    {errorText}
                </Alert>
            </Collapse>
            <Collapse in={!hasError}>
                <Grid container direction="column" alignItems="center" justify="flex-start">
                    <Grid xs item className="iteration-slider">
                        <Slide direction="left" triggerOnce>
                            <Box id="iteration-slider" width="70vw">
                                <Slider
                                    orientation="horizontal"
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
                    <Grid xs item className="step-math">
                        <Slide direction="right" triggerOnce>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Iteration {currentIteration}:
                                    </Typography>
                                    <TeX math={latexContent} block />
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                </Grid>

            </Collapse>

        </Container>
    )
}

export default OptiGradient;