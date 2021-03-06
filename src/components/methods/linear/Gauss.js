import {formatLatex, formatMatrixLatex} from "../../utils";
import {initialMatrix, initialOutputColumn, generateGridCallback, createNewColumn, createNewRow, gridTo2DArray, cloneArray, matrixToLatex} from "../../matrix_utils";
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
        target: ".matrix-col-input",
        title: "Column",
        content:
        "Add/Remove columns",
        disableBeacon: true,
    },
    {
        target: ".matrix-row-input",
        title: "Row",
        content:
        "Add/Remove rows",
    },
    {
        target: ".matrix-input",
        title: "Matrix",
        content:
        "Specify the matrix here.",
    },
    {
        target: ".output-col-input",
        title: "Output",
        content:
        "Specify the output vector.",
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

function LinearGauss({methodName, markdown}) {
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
    const [gridState, setGridState] = useState(initialMatrix);
    const [outputColumnState, setOutputColumnState] = useState(initialOutputColumn);
    /*
    const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        const rows = gridState.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated };
        }
        setGridState({
            ...gridState, rows
        });
    };
    const onOutputColumnStateUpdated = ({ fromRow, toRow, updated }) => {
        const rows = outputColumnState.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated };
        }
        setOutputColumnState({
            ...outputColumnState, rows
        });
    };
    */
    const columnCallback = (add) => {
        return () => {
            const columns = gridState.columns.slice();
            const rows = gridState.rows.slice();
            if (add) {
                columns.push(createNewColumn(columns.length));
                for (let i = 0; i < rows.length; i++) {
                    rows[i][`col_${columns.length}`] = 0;
                }
            }
            else {
                if (columns.length === 2) {
                    return;
                }
                for (let i = 0; i < rows.length; i++) {
                    delete rows[i][`col_${columns.length}`];
                }
                columns.pop();
            }
            setGridState({columns, rows});
        };
    }
    const rowCallback = (add) => {
        return () => {
            const rows = gridState.rows.slice();
            const outputColumns = outputColumnState.columns.slice();
            const outputRows = outputColumnState.rows.slice();
            if (add) {
                rows.push(createNewRow(gridState.columns.length));
                outputColumns.push(createNewColumn(outputColumns.length));
                outputRows[0][`col_${outputColumns.length}`] = 0;
            }
            else {
                if (rows.length === 2) {
                    return;
                }
                rows.pop();
                for (let i = 0; i < outputRows.length; i++) {
                    delete outputRows[i][`col_${outputColumns.length}`];
                }
                outputColumns.pop();
            }
            setGridState({...gridState, rows});
            setOutputColumnState({columns: outputColumns, rows: outputRows});
        };
    }

    // Solve
    let solve = true;
    const originalMatrix = gridTo2DArray(gridState.rows);
    let modifiedMatrix = cloneArray(originalMatrix);
    const originalOutput = gridTo2DArray(outputColumnState.rows)[0];
    let modifiedOutput = cloneArray(originalOutput);
    const rowLength = gridState.rows.length; // row dimension, also the output dimension
    const colLength = gridState.columns.length; // column dimension
    let results = [];
    let pivotLength = rowLength;
    
    for (let pivot  = 0; pivot < pivotLength - 1; pivot++) {
        let validPivot = true;
        if (modifiedMatrix[pivot][pivot] === 0 ) {
            validPivot = false;
            for (let row2 = pivot + 1; row2 < pivotLength; row2++) {
                if (modifiedMatrix[row2][pivot] !== 0) {
                    let tempMatrixRow = modifiedMatrix[pivot];
                    modifiedMatrix[pivot] = modifiedMatrix[row2];
                    modifiedMatrix[row2] = tempMatrixRow;
                    let tempOutputElement = modifiedOutput[pivot];
                    modifiedOutput[pivot] = modifiedOutput[row2];
                    modifiedOutput[row2] = tempOutputElement;
                    results.push({
                        finalMatrix: cloneArray(modifiedMatrix),
                        finalOutput: cloneArray(modifiedOutput),
                        interchange: true,
                        pivot: pivot + 1,
                        row: pivot + 1,
                        row2: row2 + 1,
                    });
                    validPivot = true;
                    break;
                }
            }
        }
        if (validPivot) {
            for (let row  = pivot + 1; row < pivotLength; row++) {
                let factor = modifiedMatrix[row][pivot] / modifiedMatrix[pivot][pivot];
                let divisionByZero = false;
                if (factor === 0) {
                    divisionByZero = true;
                }
                else if (isNaN(factor)) {
                    continue;
                }
                if (!divisionByZero) {
                    for (let col  = 0; col < colLength; col++) {
                        modifiedMatrix[row][col] -= factor * modifiedMatrix[pivot][col];
                    }
                    modifiedOutput[row] -= factor * modifiedOutput[pivot];
                }
                results.push({
                    finalMatrix: cloneArray(modifiedMatrix),
                    finalOutput: cloneArray(modifiedOutput),
                    interchange: false,
                    factor,
                    pivot: pivot + 1,
                    row: row + 1,
                });
            }
        }
    }
    let iterations = results.length;

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

    let params = {originalMatrix, originalOutput, rowLength, colLength, iterations, results};
    
    return (
        <>
            <Header methodName={methodName} markdown={markdown} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        This method is applied to matrices in the form of
                        <TeX math={String.raw`\ Ax=B`} /> .
                        <br/>
                        <Link rel="noopener noreferrer" href="https://people.richland.edu/james/lecture/m116/matrices/pivot.html" target="_blank" aria-label="Pivoting">Pivoting</Link> is also implemented.
                        <br/>
                        No backsubstitution or Gauss-Jordan form due to&nbsp;
                        <Link color="error" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vIci3C4JkL0" target="_blank" aria-label="laziness">laziness</Link>.
                    </Typography>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                                        <Grid xs item className="matrix-col-input" container spacing={1} direction="row" alignItems="center" justify="center">
                                            <Typography variant="subtitle1">
                                                Columns:
                                            </Typography>
                                            <IconButton variant="contained" color="primary" onClick={columnCallback(false)}>
                                                <RemoveCircleOutlineOutlinedIcon color="error" />
                                            </IconButton>
                                            <IconButton variant="contained" color="primary" onClick={columnCallback(true)}>
                                                <AddCircleOutlineOutlinedIcon  />
                                            </IconButton>
                                        </Grid>
                                        <Grid xs item className="matrix-row-input" container spacing={1} direction="row" alignItems="center" justify="center">
                                            <Typography variant="subtitle1">
                                                Rows:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </Typography>
                                            <IconButton variant="contained" color="primary" onClick={rowCallback(false)} >
                                                <RemoveCircleOutlineOutlinedIcon color="error" />
                                            </IconButton>
                                            <IconButton variant="contained" color="primary" onClick={rowCallback(true)} >
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
                                                <Grid key={0} item className={styleClasses.overflow}>
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
                                        <Grid xs item className="output-col-input" container spacing={1} direction="column" alignItems="center" justify="center">
                                            <Grid xs item>
                                                <Typography variant="h6">
                                                    Output, B:
                                                </Typography>
                                            </Grid>
                                            <Grid xs item container spacing={0} direction="row" alignItems="center" justify="center">
                                                <Grid key={1} item className={styleClasses.overflow}>
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
                                    </Grid>                                    
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
    let latexContent;

    if (currentIteration <= 0) {
        setCurrentIteration(1);
    }
    else if (params.iterations > 0 && currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else if (params.iterations >= 2 ) {
        let results = params.results;
        let previousMatrix = currentIteration===1 ? params.originalMatrix : results[currentIteration - 2].finalMatrix;
        let previousOutput = currentIteration===1 ? params.originalOutput : results[currentIteration - 2].finalOutput;
        let currentResult = results[currentIteration - 1];
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        `;
        if (!currentResult.interchange) {
            latexContent += String.raw`
            \begin{array}{lcl}
            \\ Factor &=& \frac{A_{${currentResult.row}${currentResult.pivot}}}{A_{${currentResult.pivot}${currentResult.pivot}}}
            \\        &=& ${formatLatex(currentResult.factor)}
            \end{array}
            `;
        }
        latexContent += String.raw`\\ \begin{array}{lcl} `;
        const boldRows = currentResult.interchange ? [currentResult.row, currentResult.row2] : [currentResult.row, currentResult.pivot];
        const finalLatex= String.raw`\overbrace{${matrixToLatex(currentResult.finalMatrix, {leftBracketOnly:true, boldRows: boldRows})}}^{A}
        \overbrace{${matrixToLatex(currentResult.finalOutput, {single:true, rightBracketOnly:true, boldRows: boldRows})}}^{B}`;
        if (!currentResult.interchange && currentResult.factor === 0) {
            latexContent += String.raw`
                \\ \text{The factor is zero, so no elimination is done here.}
                \\
                \\ ${finalLatex}
            `;
        }
        else {
            const initialLatex = String.raw`
            \overbrace{${matrixToLatex(previousMatrix, {leftBracketOnly: true, boldRows: boldRows})}}^{A}
            \overbrace{${matrixToLatex(previousOutput, {single:true, rightBracketOnly:true, boldRows: boldRows})}}^{B}`;
            const operationLatex = currentResult.interchange ?
            String.raw`R_{${currentResult.row}} \leftrightarrow R_{${currentResult.row2}}`
            : String.raw`R_{${currentResult.row}} = R_{${currentResult.row}}-${formatMatrixLatex(currentResult.factor)}R_{${currentResult.pivot}}`;
            if (smallScreen) {
                latexContent += String.raw`
                \\ ${initialLatex}
                \\ \begin{array}{lcl}
                       & \downarrow &
                    \\ & ${operationLatex} &
                    \\ & \downarrow &
                    \end{array}
                \\ ${finalLatex}
                `;
            }
            else {
                latexContent += String.raw`
                \\ ${initialLatex}
                & \overrightarrow{${operationLatex}}
                & ${finalLatex}
                `;
            }
        }
        latexContent += String.raw`\end{array}\end{array}`;
    }
    else {
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \\ \text{Cannot do any elimination.}
        \\ \overbrace{${matrixToLatex(params.originalMatrix, {leftBracketOnly: true})}}^{A}
            \overbrace{${matrixToLatex(params.originalOutput, {single:true, rightBracketOnly:true})}}^{B}
        \end{array}
        `;
    }
    
    return (
        <Container className={styleClasses.container}>
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
                                <TeX math={latexContent} block />
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LinearGauss;