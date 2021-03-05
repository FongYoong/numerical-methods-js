import {isValidMath, formatLatex, mathjsKeywords} from "../../utils";
import {initialMatrix22 as initialMatrix, generateGridCallback, gridTo2DArray, matrixToLatex} from "../../matrix_utils";
import React, {useState, useEffect, useRef} from "react";
import Header from "../../header/Header";
import Graph from "../../Graph";
import * as Desmos from 'desmos';

import { addStyles, EditableMathField } from 'react-mathquill';
import { parse, inv, multiply } from 'mathjs';
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

const FUNCTIONS = ['0', '-4','0'];
const FUNCTIONS_TEXT = ['0', '-4','0'];

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
        title: "Initial values",
        content:
            "Specify the initial/starting values of a, b, f(a) and f(b).",
    },
    {
        target: ".points-input",
        title: "Number of points",
        content:
            "Specify the number of points in between the lower and upper boundaries.",
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

function OdeFiniteDiff({methodName, markdown}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

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

    // Points
    const [points, setPoints] = useState(9);
    let pointsError = false;
    let pointsErrorText = "";
    if (!Number.isInteger(points) || points <= 0) {
        pointsError = true;
        pointsErrorText = "Number of points must be a positive integer!";
    }
    const iterations = points + 1;

    const functionsError = !functionErrors.every((e) => e === false);
    let hasError = functionsError || intervalError || pointsError;

    // Solve
    let solve = false;
    let stepSize, xArray;
    let resultsMatrix = [];
    let resultsColumn = [];
    let resultsInverse, resultsSolved;
    let results = [];
    let latexContent, graphCallback;
    if (functionNodes.every((n) => isValidMath(n)) && !hasError) {
        solve = true;
        stepSize = (upperX - lowerX) / iterations;
        xArray = [...Array(iterations).keys()].map((i) => stepSize * (i + 1));
        for (let iter = 1; iter < iterations; iter++) {
            const currentX = xArray[iter - 1];
            const pResult = functionNodes[0].evaluate({x: currentX});
            const qResult = functionNodes[1].evaluate({x: currentX});
            const fResult = functionNodes[2].evaluate({x: currentX});

            const previousYCoeff = (1 - stepSize / 2 * pResult);
            const currentYCoeff = Math.pow(stepSize, 2) * qResult - 2;
            const nextYCoeff = (1 + stepSize / 2 * pResult);
            const row = Array(iterations - 1).fill(0);
            row[iter - 1] = currentYCoeff;

            let additionalConstant = 0;
            if (iter === 1) {
                additionalConstant = previousYCoeff * initialVector[1];
            }
            else {
                row[iter - 2] = previousYCoeff;
            }
            if (iter === iterations - 1) {
                additionalConstant = nextYCoeff * initialVector[3];
            }
            else {
                row[iter] = nextYCoeff;
            }
            resultsMatrix.push(row);
            resultsColumn.push(Math.pow(stepSize, 2) * fResult - additionalConstant)
        }
        resultsInverse = inv(resultsMatrix);
        resultsSolved = multiply(resultsInverse, resultsColumn);

        for (let i = 0; i < iterations; i++) {
            results.push({
                currentX: (i === 0) ? initialVector[0] : xArray[i - 1],
                newX: xArray[i],
                currentY: (i === 0) ? initialVector[1] : resultsSolved[i - 1],
                newY: (i === iterations - 1) ? initialVector[3] : resultsSolved[i]
            });
        }
        let yColumnLatex = String.raw`\left[\begin{matrix} `;
        for (let i = 1 ; i < iterations; i++) {
            yColumnLatex += String.raw` y_{${i}}\cr `;
        }
        yColumnLatex += String.raw` \end{matrix}\right] `;

        const limit = 30;
        const tooManyLatex = String.raw`\left[\begin{matrix}
               & \dots  &        \cr
        \vdots & \ddots & \vdots \cr
               & \dots  &        \cr
        \end{matrix}\right]`;
        const tooManyColumnLatex = String.raw`\left[\begin{matrix}
        \vdots & \cr
        \vdots & \cr
        \vdots & \cr
        \end{matrix}\right]`;

        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ h &=& ${formatLatex(stepSize)}
        \\ y_{0} &=& ${initialVector[1]}
        \\ y_{${iterations}} &=& ${initialVector[3]}
        \end{array}
        \\
        \\ \hline
        \\ \text{From the equation } (1 + \frac{h}{2} P_i) y_{i+1} + (h^{2} Q_{i} - 2) + (1 - \frac{h}{2} P_i) y_{i-1} = h^{2} f_{i} \text{ ,}
        \\ \begin{array}{rcl}
        \\ ${ iterations > limit ? tooManyLatex : matrixToLatex(resultsMatrix)} ${iterations > limit ? tooManyColumnLatex : yColumnLatex} &=& ${iterations > limit ? tooManyLatex : matrixToLatex(resultsColumn, {single: true})}
        \\
        \\                                 ${iterations > limit ? tooManyColumnLatex : yColumnLatex} &=& ${iterations > limit ? tooManyLatex : matrixToLatex(resultsColumn, {single: true})} ${iterations > limit ? "": matrixToLatex(resultsInverse)}
        \\
        \\                                 ${yColumnLatex} &=& ${matrixToLatex(resultsSolved, {single: true})}
        \end{array}\end{array}
        `;

        graphCallback = (calculator, currentResult) => {
            for (let i = 0; i < iterations; i++){
                const r = results[i];
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

    let params = {iterations, results, smallScreen};
    
    return (
        <>
            <Header methodName={methodName} markdown={markdown} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        This method is applied in the form of &nbsp;
                        <TeX math={String.raw`y^{''} + P(x)y^{'} + Q(x)y = f(x)`} />.
                    </Typography>
                    <Divider />
                    <Grid xs item className="functions-display">
                        <Box border={1} borderRadius={5} boxShadow={2}>
                            <Collapse in={!hasError}>
                                {!functionsError && <Fade triggerOnce>
                                <TeX math={String.raw`y^{''} + (${functionLatexs[0]}) y^{'} + (${functionLatexs[1]}) y = ${functionLatexs[2]}`} block />
                                </Fade>}
                            </Collapse>
                        </Box>
                    </Grid>
                    <Grid className="function-input" container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        <TeX math={String.raw`P(x)`} />:
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
                                        <TeX math={String.raw`Q(x)`} />:
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
                                        <TeX math={String.raw`F(x)`} />:
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
                        <Grid xs item className="points-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Number of Points between Boundaries:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setPoints(parseInt(event.target.value))}
                                        error={pointsError}
                                        label={pointsError?"Error":""}
                                        defaultValue={points.toString()}
                                        helperText={pointsErrorText}
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
                        {solve && 
                            <Container className={styleClasses.container}>
                                <Grid className="results" container direction="column" alignItems="center" justify="center">
                                    <Grid xs item className="graph-button">
                                        <Slide direction="right" triggerOnce>
                                            <Graph params={{currentIteration : 1, graphCallback, smallScreen, ...params}} />
                                        </Slide>
                                    </Grid>
                                    <Grid xs item container spacing={1} direction="column" alignItems="center" justify="center">
                                        <Grid xs item className="step-math">
                                            <Zoom duration={500} triggerOnce>
                                                <Card className={styleClasses.card}>
                                                    <CardContent className={styleClasses.cardContent}>
                                                        <TeX math={latexContent} block />
                                                    </CardContent>
                                                </Card>
                                            </Zoom>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Container>
                        }
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

}

export default OdeFiniteDiff;