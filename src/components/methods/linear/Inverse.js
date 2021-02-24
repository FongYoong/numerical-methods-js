import {formatMatrixLatex} from "../../utils";
import {initialMatrix4 as initialMatrix, generateGridCallback, createNewColumn, createNewRow, gridTo2DArray, matrixToLatex} from "../../matrix_utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";

import { identity, column as getColumn, lup, usolve, lsolve, multiply, transpose } from 'mathjs';
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

function LinearInverse({methodName}) {
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
    const matrixSize = gridState.rows.length;
    let iterations = matrixSize;
    const lupResult = lup(originalMatrix);
    let lowerMatrix = lupResult.L;
    let upperMatrix = lupResult.U;
    let permutation = lupResult.p;
    let identityMatrix = identity(matrixSize);
    let inverseMatrix = [];
    let results = [];
    let inverseError = false;
    for (let iter  = 0; iter < iterations; iter++) {
        let identityColumn = getColumn(identityMatrix, iter).toArray();
        let d, dError = false, x, xError = false;
        try {
            d = lsolve(lowerMatrix, identityColumn).map((v) => v[0]);
        }
        catch {
            dError = true;
        }
        try {
            x = usolve(upperMatrix, d).map((v) => v[0]);
        }
        catch {
            xError = true;
        }
        inverseMatrix.push(x);
        results.push({
            identityColumn,
            d,
            dError,
            x,
            xError,
        });
        if (dError || xError) {
            inverseError = true;
            iterations = iter + 1;
            break;
        }
    }
    if (!inverseError) {
        inverseMatrix = transpose(inverseMatrix);
        inverseMatrix = permutation.map(i => inverseMatrix[i]);
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

    let params = {originalMatrix, matrixSize, lowerMatrix, upperMatrix, iterations, results, inverseMatrix};
    
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
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}`;
        if (currentIteration === 1) {
            latexContent += String.raw`
            \\
            \\ \text{After LU decomposition,}
            \\ \begin{array}{lcl}
            \\ A &=& L U
            \\
            \\   &=& ${matrixToLatex(params.lowerMatrix)} ${matrixToLatex(params.lowerMatrix)}
            \end{array}
            \\
            \\ \hline
            `
        }
        latexContent += String.raw`
        \\ I_{${currentIteration}} = ${matrixToLatex(currentResult.identityColumn, {single: true})}
        \\
        \\ \text{Using backsubstitution,}
        \\ \begin{array}{rcl}
         L d &=& I_{${currentIteration}}
        \\
        \\ ${matrixToLatex(params.lowerMatrix)} d &=& ${matrixToLatex(currentResult.identityColumn, {single: true})}
        \\`
        if (!currentResult.dError) {
            latexContent += String.raw`
            \\ d &=& ${matrixToLatex(currentResult.d, {single: true})}
            \\ \end{array}
            \\
            \\ \hline
            \\ \text{Using backsubstitution again,}
            \\ \begin{array}{rcl}
            U x &=& d
            \\
            \\ ${matrixToLatex(params.upperMatrix)} x &=& ${matrixToLatex(currentResult.d, {single: true})}
            \\
            `;
            if (!currentResult.xError) {
                latexContent += String.raw`
                \\ x &=& ${matrixToLatex(currentResult.x, {single: true})}
                \\ \end{array}
                \\
                \\ \hline
                \\ A^{-1}_{${currentIteration}} = x = ${matrixToLatex(currentResult.x, {single: true})}

                `;
            }
            else {
                latexContent += String.raw`
                \\ \end{array}
                \\ \text{Given that x cannot be solved,}
                \\ \text{an inverse does not exist.}
                \\
                `;
            }
        }
        else {
            latexContent += String.raw`
            \\ \end{array}
            \\ \text{Given that d cannot be solved,}
            \\ \text{an inverse does not exist.}
            \\
            `;
        }
        
        if (currentIteration === params.iterations && !currentResult.dError && !currentResult.xError) {
            latexContent += String.raw`
            \\
            \\ \hline
            \\
            \\ Inverse, A^{-1} = ${matrixToLatex(params.inverseMatrix)}
            \\
            \\ \text{To verify the answer,}
            \\ \begin{array}{lcl}
            \\ A A^{-1} &=& ${matrixToLatex(params.originalMatrix)} ${matrixToLatex(params.inverseMatrix)}
            \\
            \\                           &=& ${matrixToLatex(multiply(params.originalMatrix, params.inverseMatrix))}
            \\
            \\                           &=&  \text{Identity Matrix}
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

export default LinearInverse;