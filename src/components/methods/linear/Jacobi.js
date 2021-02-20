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

function LinearJacobi({methodName}) {
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
                if (columns.length === 1) {
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
    let iterations = 1;
    // Check if empty matrix
    // Don't forget to slice every iteration
    // Check for division by zero
    // Check diagonal dominance
    let triedPermutating = false; // Failed to obtain a dominant matrix even after permutating.
    if (!hasError) {
        solve = true;
        // Strictly diagonally dominant
        let dominant = false;
        let modifiedMatrix = cloneArray(originalMatrix);
        let modifiedOutput = cloneArray(originalOutput);
        console.log("Original: ", modifiedMatrix);
        if (!isDiagonallyDominant(modifiedMatrix)) {
            console.log("Initially not dominant!");
            let numPermutations = numberFactorials[matrixSize];
            let rowIndexes = [...Array(matrixSize).keys()];
            console.log("Start indexes", rowIndexes);
            for (let i = 0; i < numPermutations - 1; i++) {
                nextPermutation(rowIndexes);
                console.log("Indexes", rowIndexes);
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
                let oldInput = (i === 0) ? originalInput : results[i - 1].newInput;
                let newInput = [];
                for (let j = 0; j < matrixSize; j++) {
                    let sum = modifiedOutput[j];
                    for (let k = 0; k < matrixSize; k++) {
                        if (k !== j) {
                            sum -= modifiedMatrix[j][k] * oldInput[k];
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
                    exceedIterErrorText = "Exceeded 1000 iterations!";
                    break;
                }
            }
            iterations = i + 1;   // NOT DONE: If not dominant after all the permutations, then 1 iteration.
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

    let params = {originalMatrix, originalInput, originalOutput, matrixSize, errorThreshold, iterations, exceedIterError, exceedIterErrorText, results, triedPermutating};
    
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
                        &nbsp;is also implemented.
                    </Typography>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                                        <Grid xs item className="matrix-size-input" container spacing={1} direction="row" alignItems="center" justify="center">
                                            <Typography variant="subtitle1">
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
                                        <Grid xs item className="output-col-input" container spacing={1} direction="column" alignItems="center" justify="center">
                                            <Grid xs item>
                                                <Typography variant="h6">
                                                    Output, B:
                                                </Typography>
                                            </Grid>
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
                //console.log(`${key}: ${value}`);
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
            // Inform if converged
            let matrix = results[0].permutated ? results[0].newMatrix : params.originalMatrix;
            let output = results[0].permutated ? results[0].newOutput : params.originalOutput;
            /*
            const newLatex= String.raw`
            \overbrace{${matrixToLatex(currentResult.newMatrix, {leftBracketOnly:true})}}^{A}
            \overbrace{${matrixToLatex(params.originalInput)}}^{X_{${currentIteration}}}
            \overbrace{${matrixToLatex(currentResult.newOutput, {single:true, rightBracketOnly:true})}}^{B}`;
            */
            latexContent += String.raw`
                \\
                \overbrace{${matrixToLatex(matrix, {leftBracketOnly:true})}}^{A}
                \overbrace{${matrixToLatex(currentResult.oldInput, {single: true})}}^{X^{(${currentIteration - 1})}}
                = \overbrace{${matrixToLatex(output, {single:true})}}^{B}
                \\ X^{(${currentIteration})}_i = \frac{1}{A_{ii}}
                    \left[ B_i - \sum_{\begin{array}{l} j = 1, \\ j \ne i \end{array}}^n
                        \left( A_{ij} \cdot X^{(${currentIteration - 1})}_i \right)
                    \right]
                    
                \\ X^{(${currentIteration})} = ${matrixToLatex(currentResult.newInput, {single: true})}
            `;
            if (results[0].permutated) {
                // Reorder the equations
                const permutationMapping = generatePermutationMapping(results[0].rowIndexes);
                console.log(permutationMapping);
                let restoredOutput = cloneArray(currentResult.newInput);

                latexContent += String.raw`
                \\
                \\ \text {Given that the matrix A has been permutated in iteration 1, we must restore the original order:}
                \\
                \\ X^{(${currentIteration})} = ${matrixToLatex(restoredOutput, {single: true})}
                `;
            }
            latexContent += String.raw`
            \\
            \begin{array}{lcl}
            \\ Error &=& |X^{(${currentIteration})} - X^{(${currentIteration - 1})}|
            \\       &=& |${formatLatex(currentResult.errorInput)}|
            \end{array}
            `;
            if (currentResult.converged) {
                latexContent += String.raw`
                \\
                \\ \text{Root found because:}
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

export default LinearJacobi;