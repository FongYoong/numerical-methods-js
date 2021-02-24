import {formatMatrixLatex} from "../../utils";
import {initialMatrix3 as initialMatrix, generateGridCallback, createNewColumn, createNewRow, gridTo2DArray, cloneArray, matrixToLatex} from "../../matrix_utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";

import { zeros, identity, column as getColumn, norm, add, subtract, multiply, squeeze } from 'mathjs';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

import Typography from '@material-ui/core/Typography';
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

function LinearQR({methodName}) {
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
    const sizeCallback = (add) => {
        return () => {
            const columns = gridState.columns.slice();
            const rows = gridState.rows.slice();
            if (add) {
                columns.push(createNewColumn(columns.length));
                rows.push(createNewRow(gridState.columns.length));
                for (let i = 0; i < rows.length; i++) {
                    rows[i][`col_${columns.length}`] = 0;
                }
            }
            else {
                if (columns.length === 2) {
                    return;
                }
                rows.pop();
                for (let i = 0; i < rows.length; i++) {
                    delete rows[i][`col_${columns.length}`];
                }
                columns.pop();
            }
            setGridState({columns, rows});
        };
    }

    // Solve
    let solve = true;
    const originalMatrix = gridTo2DArray(gridState.rows);
    let modifiedMatrix = cloneArray(originalMatrix);
    const matrixSize = gridState.rows.length;
    let iterations = matrixSize - 1;
    let results = [];

    console.log("originalMatrix", originalMatrix);
    
    for (let iter  = 0; iter < iterations; iter++) {
        let vectorColumn = squeeze(getColumn(modifiedMatrix, iter));
        for (let i = 0; i < iter; i++) {
            vectorColumn[i] = 0;
        }
        console.log("vectorColumn", vectorColumn);
        let columnNorm = norm(vectorColumn, 2);
        console.log("columnNorm", columnNorm);
        let vectorBasis = zeros(matrixSize).toArray();
        vectorBasis[iter] = vectorColumn[iter] < 0 ? -1 : 1;
        console.log("vectorBasis", vectorBasis);


        let vectorCombined = add(vectorColumn, multiply(columnNorm, vectorBasis));
        console.log("vectorCombined", vectorCombined);

        let transposeMultiply = multiply(vectorCombined, vectorCombined);
        console.log("transposeMultiply", transposeMultiply);
        let multiplyTranspose = [];
        for (let i = 0; i < matrixSize; i++) {
            multiplyTranspose.push(Array(matrixSize).fill(0));
            for (let j = 0; j < matrixSize; j++) {
                multiplyTranspose[i][j] = vectorCombined[i] * vectorCombined[j];
            }
        }
        console.log("multiplyTranspose", multiplyTranspose);


        let householder = subtract(identity(matrixSize), multiply(2 / transposeMultiply, multiplyTranspose)).toArray();
        console.log("householder", householder);

        let qMatrix = iter === 0 ? householder : multiply(results[iter - 1].qMatrix, householder);
        console.log("qMatrix", qMatrix);

        modifiedMatrix = multiply(householder, modifiedMatrix);
        console.log("resultMatrix", modifiedMatrix);

        results.push({
            vectorColumn,
            columnNorm,
            vectorBasis,
            vectorCombined,
            transposeMultiply,
            multiplyTranspose,
            householder,
            qMatrix,
            resultMatrix: cloneArray(modifiedMatrix),
        });
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

    let params = {originalMatrix, matrixSize, iterations, results};
    
    return (
        <>
            <Header methodName = {methodName} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        
                    </Typography>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Grid container spacing={1} direction="column" alignItems="center" justify="center">
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
                                                    Matrix:
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

    if (currentIteration > params.iterations) {
        setCurrentIteration(params.iterations);
    }
    else {
        let results = params.results;
        let currentResult = results[currentIteration - 1];
        let initialResultMatrix = currentIteration === 1 ? params.originalMatrix : results[currentIteration - 2].resultMatrix;
        let initialQMatrix = currentIteration === 1 ? null : results[currentIteration - 2].qMatrix;
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ R^{(${currentIteration - 1})} ${currentIteration === 1 ? String.raw`= \text{Original Matrix}` : ""} = ${matrixToLatex(initialResultMatrix, {boldColumns: [currentIteration]})}
        \\
        \\ \text{Column, }c = ${matrixToLatex(currentResult.vectorColumn, {single: true})}
        \text{${currentIteration > 1 ? "\\ Note: The first " + (currentIteration - 1) + " elements of c must be zero.": ""}}
        \\
        \\ \text{Norm, }\lVert c \rVert = ${formatMatrixLatex(currentResult.columnNorm)}
        \\
        \\ \text{Basis, }e = ${matrixToLatex(currentResult.vectorBasis, {single: true})}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ v &=& c + \lVert c \rVert e
        \\
        \\   &=& ${matrixToLatex(currentResult.vectorColumn, {single: true})} +  ${formatMatrixLatex(currentResult.columnNorm)} ${matrixToLatex(currentResult.vectorBasis, {single: true})}
        \\
        \\   &=& ${matrixToLatex(currentResult.vectorCombined, {single: true})}
        \\ \end{array}
        \\ \begin{array}{lcl}
        \\ v^{T}v &=& ${matrixToLatex([currentResult.vectorCombined])} ${matrixToLatex(currentResult.vectorCombined, {single: true})}
        \\
        \\        &=& ${formatMatrixLatex(currentResult.transposeMultiply)}
        \\ \end{array}
        \\ \begin{array}{lcl}
        \\ vv^{T} &=& ${matrixToLatex(currentResult.vectorCombined, {single: true})} ${matrixToLatex([currentResult.vectorCombined])}
        \\
        \\        &=& ${matrixToLatex(currentResult.multiplyTranspose)}
        \\ \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ \text{Householder, } H^{(${currentIteration})} &=& I - \frac{2}{v^{T}v} vv^{T}
        \\
        \\                           &=& ${matrixToLatex(identity(currentResult.vectorColumn.length).toArray())} - \frac{2}{${formatMatrixLatex(currentResult.transposeMultiply)}} ${matrixToLatex(currentResult.multiplyTranspose)}
        \\
        \\                           &=& ${matrixToLatex(currentResult.householder)}
        \\ \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ Q^{(${currentIteration})} &=& ${currentIteration > 1 ? "Q^{(" + (currentIteration - 1) + ")}" : "" } H^{(${currentIteration})}
        \\
        \\                           &=& ${currentIteration > 1 ? matrixToLatex(initialQMatrix) : ""} ${matrixToLatex(currentResult.householder)}
        \\
        \\                           ${currentIteration > 1 ? "&=&" + matrixToLatex(currentResult.qMatrix) : ""}
        \\ \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ R^{(${currentIteration})} &=& H^{(${currentIteration})} R^{(${currentIteration - 1})}
        \\
        \\                           &=& ${matrixToLatex(currentResult.householder)} ${matrixToLatex(initialResultMatrix)}
        \\
        \\                           &=& ${matrixToLatex(currentResult.resultMatrix)}
        \\ \end{array}
        `;
        if (currentIteration === params.iterations) {
            latexContent += String.raw`
            \\
            \\ \hline
            \\ \text{To verify the answer,}
            \\ \begin{array}{lcl}
            \\ Q^{(${currentIteration})} R^{(${currentIteration})} &=& ${matrixToLatex(currentResult.qMatrix)} ${matrixToLatex(currentResult.resultMatrix)}
            \\
            \\                           &=& ${matrixToLatex(multiply(currentResult.qMatrix, currentResult.resultMatrix))}
            \\
            \\                           &=&  \text{Original Matrix}
            \\ \end{array}
            \\
            \\
            `
        }
        
        latexContent += String.raw`\end{array}\end{array}`;
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

export default LinearQR;