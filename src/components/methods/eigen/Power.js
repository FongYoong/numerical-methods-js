import {formatLatex} from "../../utils";
import {initialMatrix12 as initialMatrix, initialInputColumn12 as initialInputColumn,
generateGridCallback, createNewColumn, createNewRow, gridTo2DArray, cloneArray, matrixToLatex} from "../../matrix_utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";

import { multiply } from 'mathjs';
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
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
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
        target: ".scaling-input",
        title: "Use Scaling",
        content:
        "Enable/Disable scaling",
        disableBeacon: true,
    },
    {
        target: ".matrix-size-input",
        title: "Size",
        content:
        "Increase/Reduce the matrix's size",
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
        target: ".iteration-input",
        title: "Iterations",
        content:
            "Specify the number of iterations to apply the power method.",
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

function EigenPower({methodName}) {
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

    // Scaling mode
    const [scalingMode, setScalingMode] = useState(true);

    // Iterations
    const [iterations, setIterations] = useState(6);
    let iterError = false;
    let iterErrorText = "";
    if (!Number.isInteger(iterations) || iterations <= 0) {
        iterError = true;
        iterErrorText = "Iterations must be a positive integer!";
    }

    let hasError = iterError;

    // Solve
    let solve = false;
    const originalMatrix = gridTo2DArray(gridState.rows);
    const originalInput = gridTo2DArray(inputColumnState.rows)[0];
    let modifiedInput = cloneArray(originalInput);
    let results = [];
    if (!hasError) {
        solve = true;
        for (let iter  = 0; iter < iterations; iter++) {
            modifiedInput = multiply(originalMatrix, modifiedInput);
            let scaleFactor = scalingMode ? Math.max(...modifiedInput.map((v) => Math.abs(v))) : 0;
            let scaledNewInput = scalingMode ? modifiedInput.map((v) => v / scaleFactor) : modifiedInput;
            let ax = multiply(originalMatrix, scaledNewInput);
            let eigenvalue = multiply(ax, scaledNewInput) / multiply(scaledNewInput, scaledNewInput);
            results.push({
                scaleFactor,
                newInput: cloneArray(modifiedInput),
                scaledNewInput: cloneArray(scaledNewInput),
                ax,
                eigenvalue,
            });
            modifiedInput = scaledNewInput;
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

    let params = {originalMatrix, originalInput, scalingMode, iterations, results};
    
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
                                    <Grid container spacing={3} direction="column" alignItems="center" justify="center">
                                        <Grid xs item className="scaling-input" container spacing={1} direction="row" alignItems="center" justify="center">
                                            <FormControlLabel
                                                control={<Checkbox checked={scalingMode} onChange={(event) => setScalingMode(event.target.checked)} name="useScaling" />}
                                                label="Use Scaling"
                                            />
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
                                        <Grid xs item className="input-col-input" container spacing={1} direction="column" alignItems="center" justify="center">
                                            <Grid xs item>
                                                <Typography variant="h6">
                                                    Initial Input, <TeX math={String.raw`X^{(0)}`} />:
                                                </Typography>
                                            </Grid>
                                            <Grid xs item container spacing={0} direction="row" alignItems="center" justify="center">
                                                <Grid key={1} item className={styleClasses.overflow}>
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
        let previousResult = currentIteration === 1 ? null : results[currentIteration - 2];
        let initalInput = currentIteration === 1 ? params.originalInput : previousResult.scaledNewInput;
        let currentResult = results[currentIteration - 1];
        let newInput = currentResult.newInput;
        let scaledNewInput = currentResult.scaledNewInput;
        
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ X_{${currentIteration}} &=& A X_{${currentIteration - 1}}
        \\
        \\                         &=& ${matrixToLatex(params.originalMatrix)} ${matrixToLatex(initalInput, {single: true})}
        \\
        \\                         &=& ${matrixToLatex(newInput, {single: true})}
        \\ \end{array}
        \\
        `;
        if (params.scalingMode) {
            latexContent += String.raw`
            \\ max \lbrace |X_{${currentIteration}}| \rbrace = ${formatLatex(currentResult.scaleFactor)}
            \\ \begin{array}{lcl}
            \\ X_{${currentIteration}} &=& \frac{1}{max \lbrace X_{${currentIteration}} \rbrace} X_{${currentIteration}}
            \\
            \\                         &=& \frac{1}{${formatLatex(currentResult.scaleFactor)}} ${matrixToLatex(newInput, {single: true})}
            \\
            \\                         &=& ${matrixToLatex(scaledNewInput, {single: true})}
            \\ 
            \\ \end{array}
            `;
        }
        latexContent += String.raw`
        \\ \hline
        \begin{array}{lcl}
        \\ \text{Dominant eigenvalue, } \lambda_{${currentIteration}}
            &=& \frac{AX_{${currentIteration}} \cdot X_{${currentIteration}}}{X_{${currentIteration}} \cdot X_{${currentIteration}}}
        \\
        \\  &=& \frac{${matrixToLatex([currentResult.ax])} ${matrixToLatex(scaledNewInput, {single: true})}} {${matrixToLatex([scaledNewInput])} ${matrixToLatex(scaledNewInput, {single: true})}}
        \\
        \\  &=& ${formatLatex(currentResult.eigenvalue)}
        \\ \end{array}`;
        
        if (currentIteration > 1) {
            latexContent += String.raw`
            \\ \hline
            \begin{array}{lcl}
            \\ \text{Error} &=& \frac{\lambda_{${currentIteration}} - \lambda_{${currentIteration - 1}}}{\lambda_{${currentIteration}}}
            \\
            \\       &=& |\frac{${formatLatex(currentResult.eigenvalue)} - ${formatLatex(previousResult.eigenvalue)}}{${formatLatex(currentResult.eigenvalue)}}|
            \\
            \\       &=& ${formatLatex(Math.abs((currentResult.eigenvalue - previousResult.eigenvalue)/ currentResult.eigenvalue))}
            \\ \end{array}
            `;
        }

        latexContent += String.raw`
        \\
        \\ \end{array}`;
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

export default EigenPower;