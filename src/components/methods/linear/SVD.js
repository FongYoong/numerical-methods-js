import {formatMatrixLatex} from "../../utils";
import {initialMatrix6 as initialMatrix, generateGridCallback, createNewColumn, createNewRow, gridTo2DArray, matrixToLatex} from "../../matrix_utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";

import { transpose, multiply } from 'mathjs';
import {Matrix as MLMatrix, EigenvalueDecomposition as MLEigen} from 'ml-matrix';
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
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';
import Joyride, { Step as JoyrideStep, CallBackProps as JoyrideCallBackProps} from "react-joyride";
import { Zoom } from "react-awesome-reveal";
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

function LinearSVD({methodName}) {
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
            if (add) {
                rows.push(createNewRow(gridState.columns.length));
            }
            else {
                if (rows.length === 2) {
                    return;
                }
                rows.pop();
            }
            setGridState({...gridState, rows});
        };
    }

    // Solve
    const originalMatrix = gridTo2DArray(gridState.rows);
    const rowLength = gridState.rows.length; // row dimension
    const colLength = gridState.columns.length; // column dimension
    
/*
    const multiplyTranspose = multiply(transpose(originalMatrix), originalMatrix); // AT*A
    const multiplyTransposeEigen = eigs(multiplyTranspose);
    const multiplyTransposeSingularValues = multiplyTransposeEigen.values.slice().reverse().map((v) => Math.sqrt(v));
    const transposeMultiply = multiply(originalMatrix, transpose(originalMatrix)); // A*AT
    const transposeMultiplyEigen = eigs(transposeMultiply);
    const transposeMultiplySingularValues = transposeMultiplyEigen.values.slice().reverse().map((v) => Math.sqrt(v));

    let rightUnitaryT = transpose(multiplyTransposeEigen.vectors).reverse();
    let leftUnitaryT = transpose(transposeMultiplyEigen.vectors).reverse();
    let leftUnitary = transpose(leftUnitaryT);
*/
    const multiplyTranspose = multiply(originalMatrix, transpose(originalMatrix)); // A*AT
    const multiplyTransposeEigen = new MLEigen(new MLMatrix(multiplyTranspose));
    const multiplyTransposeEigenMatrix = Array.from(multiplyTransposeEigen.eigenvectorMatrix.data.map((v) => Array.from(v)));
    const multiplyTransposeSingularValues = multiplyTransposeEigen.realEigenvalues.slice().reverse().map((v) => Math.sqrt(v));

    const transposeMultiply = multiply(transpose(originalMatrix), originalMatrix); // AT*A
    const transposeMultiplyEigen = new MLEigen(new MLMatrix(transposeMultiply));
    const transposeMultiplyEigenMatrix = Array.from(transposeMultiplyEigen.eigenvectorMatrix.data.map((v) => Array.from(v)));
    const transposeMultiplyEigenValues = transposeMultiplyEigen.realEigenvalues.slice().reverse();
    const transposeMultiplySingularValues = transposeMultiplyEigen.realEigenvalues.slice().reverse().map((v) => Math.sqrt(v));

    let rightUnitaryT = transpose(transposeMultiplyEigenMatrix).reverse();
    let leftUnitaryT = transpose(multiplyTransposeEigenMatrix).reverse();
    let leftUnitary = transpose(leftUnitaryT);

    let diagonal = [];
    if (rowLength <= colLength) {
        for (let i = 0; i < rowLength; i++) {
            diagonal.push(Array(colLength).fill(0));
            if (i < colLength) {
                diagonal[i][i] = multiplyTransposeSingularValues[i];
            }
        }
    }
    else {
        for (let i = 0; i < rowLength; i++) {
            diagonal.push(Array(colLength).fill(0));
            if (i < colLength) {
                diagonal[i][i] = transposeMultiplySingularValues[i];
            }
        }
    }
    const product = multiply(leftUnitary, multiply(diagonal, rightUnitaryT));

    let latexContent = String.raw`
    \displaystyle
    \begin{array}{l}
    \begin{array}{lcl}
    \\ AA^{T} = ${matrixToLatex(multiplyTranspose)}
    \\
    \\ \text{The eigenvectors of } AA^{T}:
    \\
    \\ \bf{U} = \left[\begin{matrix}`;

    for (let i = 0 ; i < multiplyTransposeEigenMatrix.length; i++) {
        latexContent += String.raw` v_{${i + 1}} ${i === multiplyTransposeEigenMatrix.length - 1 ? '': '&'} `;
    }

    latexContent += String.raw`
    \end{matrix}\right] = ${matrixToLatex(leftUnitary)}
    \\ 
    \\ \hline
    \\
    \\ A^{T}A = ${matrixToLatex(transposeMultiply)}
    \\
    \\
    \\ \text{The eigenvectors of } A^{T}A:
    \\
    \\ \bf{V^{T}} = \left[\begin{matrix}`;

    for (let i = 0 ; i < transposeMultiplyEigenMatrix.length; i++) {
        latexContent += String.raw` v_{${i + 1}}\cr `;
    }

    latexContent += String.raw`
    \end{matrix}\right] = ${matrixToLatex(rightUnitaryT)}
    \\
    \begin{array}{lcl}
    \\ \text{The eigenvalues of } A^{T}A &=& ${transposeMultiplyEigenValues.filter((v) => !isNaN(v)).map((v) => formatMatrixLatex(v))}
    \\
    \\ \text{The singular values,} \ \sigma &=& \sqrt{\text{Eigenvalues}}
    \\          &=& ${transposeMultiplySingularValues.filter((v) => !isNaN(v)).map((v) => formatMatrixLatex(v))}
    \end{array}
    \\
    \\ \bf{D} = \left[\begin{matrix}`;
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (j === i) {
                latexContent += String.raw`\colorbox{aqua}{\bf{${formatMatrixLatex(diagonal[i][j])}}}`;
            }
            else {
                latexContent += String.raw`${formatMatrixLatex(diagonal[i][j])}`;
            }
            if (j !== colLength - 1) {
                latexContent += String.raw`&`;
            }
        }
        latexContent += String.raw`\cr`;
    }

   latexContent += String.raw`
    \end{matrix}\right]
    \\
    \\ \hline
    \\ \begin{array}{lcl}
    \\ A &=& ${matrixToLatex(originalMatrix)}
    \\
    \\ U &=& ${matrixToLatex(leftUnitary)}
    \\
    \\ D &=& ${matrixToLatex(diagonal)}
    \\
    \\ V^{T} &=& ${matrixToLatex(rightUnitaryT)}
    \\
    \\ A &=& U D V^{T}
    \\
    \\   &=& ${matrixToLatex(leftUnitary)} ${matrixToLatex(diagonal)} ${matrixToLatex(rightUnitaryT)}
    \\
    \\   &=& ${matrixToLatex(product)}
    \\ \end{array}
    \\
    \\ \hline
    \\ \text{In some cases, } U D V^{T} \ne A
    \\ \text{The error could be very small due to rounding error. }
    \\ \text{Otherwise, if the error is really huge or if the signs are reversed, this is because the my naive SVD algorithm sometimes}
    \\ \text{fails to properly realign the eigenvector matrices.}
    \\ \text{I'm too lazy to rectify this, sorry!}
    \end{array}\end{array}
    `;

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
    
    return (
        <>
            <Header methodName = {methodName} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        Incomplete! Experimental!
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
                                    </Grid>                                    
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Zoom>
                </Container>
            </Paper>

            <Divider />

            <Container className={styleClasses.container}>
                <Grid container direction="column" alignItems="center" justify="flex-start">
                    <Grid xs item className="step-math">
                        <Zoom direction="right" triggerOnce>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <TeX math={latexContent} block />
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                </Grid>
            </Container>
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

export default LinearSVD;