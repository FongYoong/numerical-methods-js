import {formatLatex, formatMatrixLatex} from "../../utils";
import {initialMatrix, initialOutputColumn, createNewColumn, createNewRow, gridTo2DArray, matrixToLatex} from "./matrix_utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";

import { MathComponent } from 'mathjax-react';

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
        "Specify the input matrix here.",
    },
    {
        target: ".output-col-input",
        title: "Output",
        content:
        "Specify the output.",
    },
    {
        target: ".step-math",
        title: "Steps",
        content:
            "The steps are shown here.",
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
    const [gridState, setGridState] = useState(initialMatrix);
    const [outputColumnState, setOutputColumnState] = useState(initialOutputColumn);
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
    let modifiedMatrix = JSON.parse(JSON.stringify(originalMatrix));
    const originalOutput = gridTo2DArray(outputColumnState.rows);
    let modifiedOutput = JSON.parse(JSON.stringify(originalOutput));
    const rowLength = gridState.rows.length; // row dimension, also the output dimension
    const colLength = gridState.columns.length; // column dimension
    let results = [];
    // Check is empty matrix
    // Don't forget to slice every iteration
    // Check for division by zero
    let pivotLength = rowLength < colLength ? rowLength : colLength;
    
    for (let pivot  = 0; pivot < pivotLength - 1; pivot++) {
        for (let row  = pivot + 1; row < pivotLength; row++) {
            if (modifiedMatrix[row - 1][pivot] === 0 && modifiedMatrix[row][pivot] !== 0) {
                let tempMatrixRow = modifiedMatrix[row - 1];
                modifiedMatrix[row - 1] = modifiedMatrix[row];
                modifiedMatrix[row] = tempMatrixRow;
                let tempOutputElement = modifiedOutput[0][row - 1];
                modifiedOutput[0][row - 1] = modifiedOutput[0][row];
                modifiedOutput[0][row] = tempOutputElement;
                    results.push({
                    finalMatrix: JSON.parse(JSON.stringify(modifiedMatrix)),
                    finalOutput: JSON.parse(JSON.stringify(modifiedOutput)),
                    interchange: true,
                    pivot: pivot + 1,
                    row: row + 1,
                });
            }
        }
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
                modifiedOutput[0][row] -= factor * modifiedOutput[0][pivot];
            }
            results.push({
                finalMatrix: JSON.parse(JSON.stringify(modifiedMatrix)),
                finalOutput: JSON.parse(JSON.stringify(modifiedOutput)),
                interchange: false,
                factor,
                pivot: pivot + 1,
                row: row + 1,
            });
        }
    }
    
    console.log(results);
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
            <Header methodName = {methodName} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        This method is applied to matrices in the form of
                        <MathComponent display={false} tex={String.raw`\ Ax=B`} />
                        . <Link rel="noopener noreferrer" href="https://people.richland.edu/james/lecture/m116/matrices/pivot.html" target="_blank" aria-label="Pivoting">Pivoting</Link> is also implemented.
                        No backsubstitution or Gauss-Jordan form due to &nbsp;
                        <Link color="error" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vIci3C4JkL0" target="_blank" aria-label="laziness">laziness</Link>.
                    </Typography>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                                        <Grid xs item className="matrix-col-input" container spacing={1} direction="row" alignItems="center" justify="flex-start">
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
                                        <Grid xs item className="matrix-row-input" container spacing={1} direction="row" alignItems="center" justify="flex-start">
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
                                        
                                        <Grid xs item>
                                            <Typography variant="h6">
                                                Matrix, A:
                                            </Typography>
                                        </Grid>

                                        <Grid xs item className="matrix-input" container spacing={0} direction="row" alignItems="center" justify="center">
                                            <Grid key={Math.random()} item className={styleClasses.overflow}>
                                                <ReactDataGrid
                                                    columns={gridState.columns}
                                                    rowGetter={i => gridState.rows[i]}
                                                    rowsCount={gridState.rows.length}
                                                    onGridRowsUpdated={onGridRowsUpdated}
                                                    enableCellSelect={true}
                                                    headerRowHeight={1}
                                                    minColumnWidth={columnWidth}
                                                    minWidth={columnWidth * gridState.columns.length + widthPadding}
                                                    rowHeight={rowHeight}
                                                    minHeight={rowHeight * gridState.rows.length + heightPadding}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid xs item>
                                            <Typography variant="h6">
                                                Output, B:
                                            </Typography>
                                        </Grid>
                                        
                                        <Grid xs item className="output-col-input" container spacing={0} direction="row" alignItems="center" justify="center">
                                            <Grid key={Math.random()} item className={styleClasses.overflow}>
                                                <ReactDataGrid
                                                    columns={outputColumnState.columns}
                                                    rowGetter={i => outputColumnState.rows[i]}
                                                    rowsCount={outputColumnState.rows.length}
                                                    onGridRowsUpdated={onOutputColumnStateUpdated}
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
    let results = params.results;
    let previousMatrix = currentIteration===1 ? params.originalMatrix : results[currentIteration - 2].finalMatrix;
    let previousOutput = currentIteration===1 ? params.originalOutput : results[currentIteration - 2].finalOutput;
    let currentResult = results[currentIteration - 1];
    let latexContent;

    if (currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else {
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
        const boldRows = currentResult.interchange ? [currentResult.row - 1, currentResult.row] : [currentResult.row, currentResult.pivot];
        const finalLatex= String.raw`\overbrace{${matrixToLatex(currentResult.finalMatrix, {leftBracketOnly:true, boldRows: boldRows})}}^{A}
        \overbrace{${matrixToLatex(currentResult.finalOutput, {rightBracketOnly:true, boldRows: boldRows})}}^{B}`;
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
            \overbrace{${matrixToLatex(previousOutput, {rightBracketOnly:true, boldRows: boldRows})}}^{B}`;
            const operationLatex = currentResult.interchange ?
            String.raw`R_{${currentResult.row - 1}} \Leftrightarrow R_{${currentResult.row}}`
            : String.raw`R_{${currentResult.row}} = R_{${currentResult.row}}-${formatMatrixLatex(currentResult.factor)}R_{${currentResult.pivot}}`;
            if (smallScreen) {
                latexContent += String.raw`
                \\ ${initialLatex}
                \\
                \\ \begin{array}{lcl}
                       & \downarrow &
                    \\ & ${operationLatex} &
                    \\ & \downarrow &
                    \end{array}
                \\
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
        latexContent += String.raw`\end{array}`;
        

        latexContent += String.raw`
        \\
        \begin{array}{lcl}
        \\
        \end{array}
        `;
        latexContent += String.raw`\end{array}`;
    }
    
    return (
        <Container className={styleClasses.container}>
            <Grid className="results" container direction="column" alignItems="center" justify="flex-start">
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
                                <MathComponent tex={latexContent}/>
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LinearJacobi;