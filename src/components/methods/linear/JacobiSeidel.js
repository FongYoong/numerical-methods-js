import {formatLatex, formatMatrixLatex} from "../../utils";
import {initialMatrix3, initialInputColumn3, initialOutputColumn3, createNewColumn, createNewRow, gridTo2DArray, cloneArray,
isDiagonallyDominant, numberFactorials, nextPermutation, generatePermutationMapping, matrixToLatex} from "./matrix_utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
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

const TOUR_STEPS: JoyrideStep[] = [
    {
        target: ".matrix-size-input",
        title: "Size",
        content:
        "Increase/Reduce the matrix's size",
        disableBeacon: true,
    },
    {
        target: ".matrix-input",
        title: "Matrix",
        content:
        "Specify the matrix here.",
    },
    {
        target: ".input-col-input",
        title: "Input",
        content:
        "Specify the initial input vector.",
    },
    {
        target: ".output-col-input",
        title: "Output",
        content:
        "Specify the output vector.",
    },
    {
        target: ".errorThreshold-input",
        title: "Error Threshold",
        content:
            "Specify the minimum error threshold",
    },
    {
        target: ".step-math",
        title: "Steps",
        content:
            "The steps are shown here.",
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
        padding: theme.spacing(0.5),
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
        margin: theme.spacing(0),
    },
    cardContent: {
        overflow: 'auto',
        "& > *": {
            margin: theme.spacing(0.5)
        }
    },
    overflow: {
        overflow: 'auto',
    },
    matrixCard: {
        width: "60vw",
    },
    divider: {
        width: '500 px',
        height: '100px',
        marginTop: '20px',
        marginBottom: '20px',
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(2),
    },
}));

function LinearJacobiSeidel({methodName}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
        
    });

    const styleClasses = useStyles();
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    // Grid
    const columnWidth = smallScreen ? 45 : 60;
    const rowHeight = smallScreen ? 35 : 35;
    const widthPadding = smallScreen ? 10 : 100;
    const heightPadding = smallScreen ? 5 : 20;
    const [gridState, setGridState] = useState(initialMatrix3);
    const [inputColumnState, setInputColumnState] = useState(initialInputColumn3);
    const [outputColumnState, setOutputColumnState] = useState(initialOutputColumn3);
    function generateGridCallback (state, stateSetter) {
        return ({ fromRow, toRow, updated }) => {
            const rows = state.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            stateSetter({
                ...state, rows
            });
        };
    }
    const sizeCallback = (add) => {
        return () => {
            const columns = gridState.columns.slice();
            const rows = gridState.rows.slice();
            const inputColumns = inputColumnState.columns.slice();
            const inputRows = inputColumnState.rows.slice();
            const outputColumns = outputColumnState.columns.slice();
            const outputRows = outputColumnState.rows.slice();
            if (add) {
                columns.push(createNewColumn(columns.length));
                rows.push(createNewRow(gridState.columns.length));
                for (let i = 0; i < rows.length; i++) {
                    rows[i][`col_${columns.length}`] = 0;
                }
                inputColumns.push(createNewColumn(inputColumns.length));
                inputRows[0][`col_${inputColumns.length}`] = 0;
                outputColumns.push(createNewColumn(outputColumns.length));
                outputRows[0][`col_${outputColumns.length}`] = 0;
            }
            else {
                if (columns.length === 2) {
                    return;
                }
                rows.pop();
                for (let i = 0; i < outputRows.length; i++) {
                    delete outputRows[i][`col_${outputColumns.length}`];
                }
                for (let i = 0; i < rows.length; i++) {
                    delete rows[i][`col_${columns.length}`];
                }
                columns.pop();
                for (let i = 0; i < inputRows.length; i++) {
                    delete inputRows[i][`col_${inputColumns.length}`];
                }
                inputColumns.pop();
                outputColumns.pop();
            }
            setGridState({columns, rows});
            setInputColumnState({columns: inputColumns, rows: inputRows});
            setOutputColumnState({columns: outputColumns, rows: outputRows});
        };
    }

    // Solver Type
    const [solverType, setSolverType] = useState("jacobi");

    // Error threshold
    const [errorThreshold, setErrorThreshold] = useState(0.0002);
    let thresholdError = false;
    let thresholdErrorText = "";
    if (errorThreshold < 0) {
        thresholdError = true;
        thresholdErrorText = "Threshold cannot be negative!";
    }

    let hasError = thresholdError;

    // Solve
    let solve = false;
    let exceedIterError = false;
    let exceedIterErrorText = "";
    const originalMatrix = gridTo2DArray(gridState.rows);
    const originalOutput = gridTo2DArray(outputColumnState.rows)[0];
    const originalInput = gridTo2DArray(inputColumnState.rows)[0];
    let modifiedInput = cloneArray(originalInput);
    const matrixSize = gridState.rows.length;
    let results = [];
    let iterations = 0;
    let permutated = false;
    let triedPermutating = false; // Failed to obtain a dominant matrix even after permutating.
    if (!hasError) {
        solve = true;
        let dominant = false; // Strictly diagonally dominant
        let modifiedMatrix = cloneArray(originalMatrix);
        let modifiedOutput = cloneArray(originalOutput);
        console.log("Original: ", modifiedMatrix);
        if (!isDiagonallyDominant(modifiedMatrix)) {
            console.log("Initially not dominant!");
            let numPermutations = numberFactorials[matrixSize];
            let rowIndexes = [...Array(matrixSize).keys()];
            for (let i = 0; i < numPermutations - 1; i++) {
                nextPermutation(rowIndexes);
                const permutatedMatrix = rowIndexes.map(ind => modifiedMatrix[ind]);
                if (isDiagonallyDominant(permutatedMatrix)) {
                    dominant = true;
                    modifiedMatrix = permutatedMatrix;
                    modifiedOutput = rowIndexes.map(ind => modifiedOutput[ind]);
                    console.log("Found a dominant!", modifiedMatrix, modifiedOutput, rowIndexes);
                    break;
                }
            }
            if (dominant) {
                results.push({
                    newMatrix: cloneArray(modifiedMatrix),
                    newOutput: cloneArray(modifiedOutput),
                    newInput: cloneArray(modifiedInput),
                    permutated: true,
                    rowIndexes: rowIndexes,
                });
                permutated = true;
                iterations += 1;
            }
            else {
                console.log("Tried permutating but failed!");
                triedPermutating = true;
            }
        }
        else {
            console.log("Initially dominant!");
            dominant = true;
        }
        
        if (dominant) {
            console.log("Solve Dominant!");
            let i = 0;
            while (true) {
                let oldInput = (i === 0) ? originalInput : results[i - 1 + iterations].newInput;
                let newInput = [];
                for (let j = 0; j < matrixSize; j++) {
                    let sum = modifiedOutput[j];
                    if (solverType === "jacobi") {
                        for (let k = 0; k < matrixSize; k++) {
                            if (k !== j) {
                                sum -= modifiedMatrix[j][k] * oldInput[k];
                            }
                        }
                    }
                    else {
                        for (let k = 0; k < matrixSize; k++) {
                            if (k < j) {
                                sum -= modifiedMatrix[j][k] * newInput[k];
                            }
                            else if (k > j) {
                                sum -= modifiedMatrix[j][k] * oldInput[k];
                            }
                        }
                    }
                    sum /= modifiedMatrix[j][j];
                    newInput.push(sum);
                }
                let errorInput = newInput.map((v, index) => Math.abs(v - oldInput[index]));
                let converged = true;
                for (let j = 0; j < matrixSize; j++) {
                    if (errorInput[j] >= errorThreshold) {
                        converged = false;
                        break;
                    }
                }
                results.push({
                    oldInput,
                    newInput,
                    errorInput,
                    converged,
                });
                
                i++;
                if (converged) {
                    console.log("Converged");
                    break;
                }
                if (i > 1000) {
                    console.log("Exceeded 1000 iterations!");
                    exceedIterError = true;
                    exceedIterErrorText = "Exceeded 1000 iterations! Try increasing the error threshold.";
                    break;
                }
            }
            iterations += i;
        }
    }
    console.log(results);

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

    let params = {solverType, originalMatrix, originalInput, originalOutput, matrixSize, errorThreshold, iterations, exceedIterError, exceedIterErrorText, results, permutated, triedPermutating};
    
    return (
        <>
            <Header methodName = {methodName} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        This method is applied to matrices in the form of
                        <TeX math={String.raw`\ Ax=B`} />
                        . <Link rel="noopener noreferrer" href="https://people.richland.edu/james/lecture/m116/matrices/pivot.html" target="_blank" aria-label="Pivoting">Pivoting</Link>
                        &nbsp; bla bla bla. Warning: 7x7 matrix, factorial, 7! * 7*7
                    </Typography>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Grid container spacing={3} direction="column" alignItems="center" justify="center">
                                        <Grid xs item className="solver-type-input" container spacing={1} direction="row" alignItems="center" justify="center">
                                            <Typography variant="h6">
                                                Solver Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </Typography>
                                            <RadioGroup aria-label="solverType" name="solverType" value={solverType} onChange={(event)=>setSolverType(event.target.value)}>
                                                <FormControlLabel value="jacobi" control={<Radio />} label="Jacobi" />
                                                <FormControlLabel value="seidel" control={<Radio />} label="Gauss-Seidel" />
                                            </RadioGroup>
                                        </Grid>
                                        <Grid xs item className="matrix-size-input" container spacing={1} direction="row" alignItems="center" justify="center">
                                            <Typography variant="h6">
                                                Size:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </Typography>
                                            <IconButton variant="contained" color="primary" onClick={sizeCallback(false)} >
                                                <RemoveCircleOutlineOutlinedIcon color="error" />
                                            </IconButton>
                                            <IconButton variant="contained" color="primary" onClick={sizeCallback(true)} >
                                                <AddCircleOutlineOutlinedIcon />
                                            </IconButton>
                                        </Grid>

                                        <Grid xs item className="matrix-input" container spacing={1} direction="column" alignItems="center" justify="center">
                                            <Grid xs item>
                                                <Typography variant="h6">
                                                    Matrix, A:
                                                </Typography>
                                            </Grid>
                                            <Grid xs item container spacing={0} direction="row" alignItems="center" justify="center">
                                                <Grid key={Math.random()} item className={styleClasses.overflow}>
                                                    <ReactDataGrid
                                                        columns={gridState.columns}
                                                        rowGetter={i => gridState.rows[i]}
                                                        rowsCount={gridState.rows.length}
                                                        onGridRowsUpdated={generateGridCallback(gridState, setGridState)}
                                                        enableCellSelect={true}
                                                        headerRowHeight={1}
                                                        minColumnWidth={columnWidth}
                                                        minWidth={columnWidth * gridState.columns.length + widthPadding}
                                                        rowHeight={rowHeight}
                                                        minHeight={rowHeight * gridState.rows.length + heightPadding}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid xs item className="input-col-input" container spacing={1} direction="column" alignItems="center" justify="center">
                                            <Grid xs item>
                                                <Typography variant="h6">
                                                    Initial Input, <TeX math={String.raw`X^{(0)}`} />:
                                                </Typography>
                                            </Grid>
                                            <Grid xs item container spacing={0} direction="row" alignItems="center" justify="center">
                                                <Grid key={Math.random()} item className={styleClasses.overflow}>
                                                    <ReactDataGrid
                                                        columns={inputColumnState.columns}
                                                        rowGetter={i => inputColumnState.rows[i]}
                                                        rowsCount={inputColumnState.rows.length}
                                                        onGridRowsUpdated={generateGridCallback(inputColumnState, setInputColumnState)}
                                                        enableCellSelect={true}
                                                        headerRowHeight={1}
                                                        minColumnWidth={columnWidth}
                                                        minWidth={columnWidth * inputColumnState.columns.length + widthPadding}
                                                        rowHeight={rowHeight}
                                                        minHeight={rowHeight * inputColumnState.rows.length + heightPadding}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid xs item className="output-col-input" container spacing={1} direction="column" alignItems="center" justify="center">
                                            <Grid xs item>
                                                <Typography variant="h6">
                                                    Output, B:
                                                </Typography>
                                            </Grid>
                                            <Grid xs item container spacing={0} direction="row" alignItems="center" justify="center">
                                                <Grid key={Math.random()} item className={styleClasses.overflow}>
                                                    <ReactDataGrid
                                                        columns={outputColumnState.columns}
                                                        rowGetter={i => outputColumnState.rows[i]}
                                                        rowsCount={outputColumnState.rows.length}
                                                        onGridRowsUpdated={generateGridCallback(outputColumnState, setOutputColumnState)}
                                                        enableCellSelect={true}
                                                        headerRowHeight={1}
                                                        minColumnWidth={columnWidth}
                                                        minWidth={columnWidth * outputColumnState.columns.length + widthPadding}
                                                        rowHeight={rowHeight}
                                                        minHeight={rowHeight * outputColumnState.rows.length + heightPadding}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
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
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Zoom>
                </Container>
                <Divider />

            </Paper>
            
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
    let hasError = params.exceedIterError;
    let errorText = params.exceedIterErrorText;
    let latexContent;

    if (currentIteration <= 0) {
        setCurrentIteration(1);
    }
    else if (params.iterations > 0 && currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else if (params.triedPermutating) {
        // Failed even after permutating the matrix
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \\ \text{Cannot find a diagonally dominant matrix.}
        \\ \overbrace{${matrixToLatex(params.originalMatrix, {leftBracketOnly: true})}}^{A}
           \overbrace{${matrixToLatex(params.originalInput, {single: true})}}^{X_{0}}
        &=&\overbrace{${matrixToLatex(params.originalOutput, {single: true})}}^{B}
        \end{array}
        `;
    }
    else if (params.iterations > 0) {
        let results = params.results;
        let currentResult = results[currentIteration - 1];
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \\ \begin{array}{lcl}
        `;
        if (currentResult.permutated) {
            const permutationMapping = generatePermutationMapping(currentResult.rowIndexes);
            const boldRows = Object.keys(permutationMapping).map((v) => parseInt(v) + 1);
            boldRows.push(...Object.values(permutationMapping).map((v) => v + 1));
            const previousLatex = String.raw`
            \overbrace{${matrixToLatex(params.originalMatrix, {leftBracketOnly: true, boldRows: boldRows})}}^{A}
            \overbrace{${matrixToLatex(params.originalOutput, {single:true, rightBracketOnly:true, boldRows: boldRows})}}^{B}`;
            let operationLatex =  String.raw`\begin{array}{l}`;
            for (const [key, value] of Object.entries(permutationMapping)) {
                operationLatex += String.raw`R_{${parseInt(key) + 1}} \leftrightarrow R_{${value + 1}}\\`;
            }
            operationLatex += String.raw`\end{array}`;
            const newLatex= String.raw`
            \overbrace{${matrixToLatex(currentResult.newMatrix, {leftBracketOnly:true, boldRows: boldRows})}}^{A}
            \overbrace{${matrixToLatex(currentResult.newOutput, {single:true, rightBracketOnly:true, boldRows: boldRows})}}^{B}`;
            latexContent += String.raw`
            \\ \text{The matrix's rows are } \textbf{permutated} ${smallScreen?"\\\\":""} \text{ to make it } \textbf{strictly diagonally dominant.}
            \\`
            if (smallScreen) {
                latexContent += String.raw`
                \\ ${previousLatex}
                \\ \begin{array}{lcl}
                    & \downarrow &
                    \\ & ${operationLatex} &
                    \\ & \downarrow &
                    \end{array}
                \\ ${newLatex}
                `;
            }
            else {
                latexContent += String.raw`
                \\ \begin{array}{lcl}
                \\ ${previousLatex}
                    & \overrightarrow{${operationLatex}}
                    & ${newLatex}
                    \end{array}
                `;
            }
        }
        else {
            let index = params.permutated ? currentIteration - 1: currentIteration;
            let matrix = params.permutated ? results[0].newMatrix : params.originalMatrix;
            let output = params.permutated ? results[0].newOutput : params.originalOutput;
            let solverExpressionLatex = params.solverType === "jacobi" ?
            String.raw`
            X^{(${index})}_i &=& \frac{1}{A_{ii}}
                \left[ B_i - \sum_{\substack{j = 1, \\ j \ne i}}^n \left( A_{ij} \cdot X^{(${index - 1})}_j \right)
                \right]`
            :
            String.raw`
            X^{(${index})}_i &=& \frac{1}{A_{ii}}
                \left[ B_i - \sum_{\substack{j = 1}}^{i-1} \left( A_{ij} \cdot X^{(${index})}_j \right)
                           - \sum_{\substack{j = i+1}}^{n} \left( A_{ij} \cdot X^{(${index - 1})}_j \right)

                \right]`;
            latexContent += String.raw`
            \\
            \overbrace{${matrixToLatex(matrix, {leftBracketOnly:true})}}^{A}
            \overbrace{${matrixToLatex(currentResult.oldInput, {single: true})}}^{X^{(${index - 1})}}
            = \overbrace{${matrixToLatex(output, {single:true})}}^{B}
            \\
            \begin{array}{lcl}
            \\ ${solverExpressionLatex}
            \\
            \\ &=& \left[\begin{matrix}
            `;
            for (let i = 0; i < params.matrixSize; i++) {
                latexContent += String.raw`\frac{1}{${formatMatrixLatex(matrix[i][i])}} \left[ ${formatMatrixLatex(output[i])}`;
                if (params.solverType === "jacobi") {
                    for (let j = 0; j < params.matrixSize; j++) {
                        if (j !== i) {
                            latexContent += String.raw`- (${formatMatrixLatex(matrix[i][j])}) (${formatMatrixLatex(currentResult.oldInput[j])}) `;
                        }
                    }
                }
                else {
                    for (let j = 0; j < params.matrixSize; j++) {
                        if (j < i) {
                            //sum -= modifiedMatrix[i][j] * newInput[j];
                            latexContent += String.raw`- (${formatMatrixLatex(matrix[i][j])}) (${formatMatrixLatex(currentResult.newInput[j])}) `;
                        }
                        else if (j > i) {
                            //sum -= modifiedMatrix[i][j] * oldInput[j];
                            latexContent += String.raw`- (${formatMatrixLatex(matrix[i][j])}) (${formatMatrixLatex(currentResult.oldInput[j])}) `;
                        }
                    }
                }

                latexContent += String.raw`\right] \cr`;
            }

            latexContent += String.raw`
            \end{matrix}\right]
            \\
            \\ X^{(${index})} &=& ${matrixToLatex(currentResult.newInput, {single: true})}
            \end{array}
            `;
            if (results[0].permutated) {
                // Reorder the equations
                let restoredOutput = cloneArray(currentResult.newInput);
                restoredOutput = results[0].rowIndexes.map(ind => restoredOutput[ind]);
                latexContent += String.raw`
                \\
                \\ \hline
                \\ \text {Given that the matrix A has been permutated in iteration 1, }
                \\ \text {we must restore it to the original order:}
                \\
                \\ X^{(${index})}_{restored} = ${matrixToLatex(restoredOutput, {single: true})}
                `;
            }
            latexContent += String.raw`
            \\
            \\ \hline
            \begin{array}{lcl}
            \\ Error &=& |X^{(${index})} - X^{(${index - 1})}|
            \\       &=& |${formatLatex(currentResult.errorInput)}|
            \end{array}
            `;
            if (currentResult.converged) {
                latexContent += String.raw`
                \\
                \\ \hline
                \\ \text{Converged because:}
                \\
                \\ Error < Error Threshold
                \\ ${formatLatex(currentResult.errorInput)} < ${formatLatex(params.errorThreshold)}
                `;
            }
        }
        latexContent += String.raw`\end{array}\end{array}`;
        
    }
    else {
        latexContent = String.raw`
        \displaystyle
        \begin{array}{lcl}
        \\ \text{Cannot do anything.}
        \\ \overbrace{${matrixToLatex(params.originalMatrix, {leftBracketOnly: true})}}^{A}
           \overbrace{${matrixToLatex(params.originalInput, {single: true})}}^{X_{0}}
        &=&\overbrace{${matrixToLatex(params.originalOutput, {single: true})}}^{B}
        \end{array}
        `;
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
                    <Grid xs item className="iteration-slider">
                        <Slide direction="left" triggerOnce>
                            <Box id="iteration-slider" width="70vw">
                                <Slider
                                    orientation="horizontal"
                                    onChangeCommitted={(event, value) => {setCurrentIteration(value)}}
                                    defaultValue={currentIteration}
                                    aria-labelledby="discrete-slider-small-steps"
                                    step={1}
                                    marks
                                    min={1}
                                    max={params.iterations<=0 ? 1 :params.iterations}
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
                                    <TeX math={latexContent} />
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                </Grid>
            </Collapse>
        </Container>
    )
}

export default LinearJacobiSeidel;