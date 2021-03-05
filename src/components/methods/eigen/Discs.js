import {formatLatex} from "../../utils";
import {initialMatrix15 as initialMatrix, initialInputColumn12 as initialInputColumn,
generateGridCallback, createNewColumn, createNewRow, gridTo2DArray} from "../../matrix_utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";
import Graph from "../../Graph";
import * as Desmos from 'desmos';

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
import { Zoom, Slide } from "react-awesome-reveal";
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
        target: ".step-math",
        title: "Steps",
        content:
            "The steps are shown here.",
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

function EigenDiscs({methodName, markdown}) {
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
    const [inputColumnState, setInputColumnState] = useState(initialInputColumn);
    const sizeCallback = (add) => {
        return () => {
            const columns = gridState.columns.slice();
            const rows = gridState.rows.slice();
            const inputColumns = inputColumnState.columns.slice();
            const inputRows = inputColumnState.rows.slice();
            if (add) {
                columns.push(createNewColumn(columns.length));
                rows.push(createNewRow(gridState.columns.length));
                for (let i = 0; i < rows.length; i++) {
                    rows[i][`col_${columns.length}`] = 0;
                }
                inputColumns.push(createNewColumn(inputColumns.length));
                inputRows[0][`col_${inputColumns.length}`] = 0;
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
                for (let i = 0; i < inputRows.length; i++) {
                    delete inputRows[i][`col_${inputColumns.length}`];
                }
                inputColumns.pop();
            }
            setGridState({columns, rows});
            setInputColumnState({columns: inputColumns, rows: inputRows});
        };
    }

    // Solve
    const originalMatrix = gridTo2DArray(gridState.rows);
    const matrixSize = originalMatrix.length;
    const originalMLMatrix = new MLMatrix(originalMatrix);
    const eigenObject = new MLEigen(originalMLMatrix);
    const realEigenValues = eigenObject.realEigenvalues;
    const imaginaryEigenvalues = eigenObject.imaginaryEigenvalues;
    
    let latexContent = String.raw`
    \displaystyle
    \begin{array}{l}
    \\ \text{The  discs are:}
    \\
    `;

    let radiuses = [];
    
    for (let i = 0; i < matrixSize; i++) {
        let count = 0;
        let sum = 0;
        latexContent += String.raw`
        \\ \begin{array}{lcl}
        \\ | \lambda - ${formatLatex(originalMatrix[i][i])} | &\leq&
        `;
        for (let j = 0; j < matrixSize; j++) {
            if (j !== i) {
                sum += Math.abs(originalMatrix[i][j]) 
                latexContent += String.raw`
                | ${formatLatex(originalMatrix[i][j])} |
                `;
                count += 1;
                if (count !== matrixSize - 1) {
                    latexContent += String.raw`+`;
                }
            }
        }
        latexContent += String.raw`
        \\ &\leq& ${formatLatex(sum)}
        \end{array}
        `;
        radiuses.push(sum);
    }
    
    latexContent += String.raw`
    \\
    \\ \hline
    \\ \begin{array}{lcl}
    \\ \text{For reference, the matrix's eigenvalues are:}
    \\
    `;

    for (let i = 0; i < matrixSize; i++) {
        latexContent += String.raw`
        \\ \lambda_{${i + 1}} = ${formatLatex(realEigenValues[i])}
        `;
        if (imaginaryEigenvalues[i] !== 0) {
            latexContent += String.raw`
            + j (${formatLatex(imaginaryEigenvalues[i])})
            `;
        }
    }

    latexContent += String.raw`
    \\ \end{array} \end{array}
    `;
    
    let graphCallback = (calculator, currentResult) => {
        for (let i = 0; i < matrixSize; i++) {
            calculator.current.setExpression({ id: `Eigenvalue ${i+1}`, color: Desmos.Colors.RED, pointStyle: Desmos.Styles.POINT, label: `Eigenvalue ${i+1}`, showLabel:true, latex:
            `(${formatLatex(realEigenValues[i])}, ${formatLatex(imaginaryEigenvalues[i])})` });
            calculator.current.setExpression({ id: `Disk ${i+1}`, color: Desmos.Colors.BLUE, latex: String.raw
            `(x - ${formatLatex(originalMatrix[i][i])})^2 + y^2 <= ${radiuses[i]*radiuses[i]}
            ` });
        }
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
    
    return (
        <>
            <Header methodName={methodName} markdown={markdown} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        
                    </Typography>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Grid container spacing={3} direction="column" alignItems="center" justify="center">
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
            
            <Container className={styleClasses.container}>
                <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                    <Grid xs item className="step-math">
                        <Slide direction="left" triggerOnce>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <TeX math={latexContent} block />
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                    <Grid xs item className="graph-button">
                        <Slide direction="right" triggerOnce>
                            <Graph params={{Iterations: 0, graphCallback, smallScreen}} />
                        </Slide>
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

export default EigenDiscs;