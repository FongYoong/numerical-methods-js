import {isValidMath, formatLatex} from "../../utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";
import Graph from "../../Graph";
import * as Desmos from 'desmos';

import { addStyles, EditableMathField } from 'react-mathquill';
import { parse } from 'mathjs';
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
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';
import Joyride, { Step as JoyrideStep, CallBackProps as JoyrideCallBackProps} from "react-joyride";
import Collapse from '@material-ui/core/Collapse';
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const TOUR_STEPS: JoyrideStep[] = [
    {
        target: ".function-input",
        title: "Function",
        content:
        "Type a math function which only has the variable x. cos(x), sin(x) and e^x are supported.",
        disableBeacon: true,
    },
    {
        target: ".subIntervals-input",
        title: "Order",
        content:
            "Specify the number of subintervals, N, which must be even.",
    },
    {
        target: ".interval-input",
        title: "Interval",
        content:
            "Select the lower and upper bounds of x",
    },
    {
        target: ".step-math",
        title: "Steps",
        content:
            "The steps for each iteration are shown here.",
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

function IntegralSimpson({methodName}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    const [functionLatex, setFunctionLatex] = useState(String.raw`\left(x-3\right)^{3}+2\left(x-3\right)^{2}-1`);
    const [functionText, setFunctionText] = useState('');

    let functionValue;
    let functionError = false;
    let functionErrorText = "";
    try {
        functionValue = parse(functionText);
    }
    catch {
        functionError = true;
        functionErrorText = "Invalid equation!";
    }
    try {
        // Check variables
        functionValue.evaluate({x : 0});
    }
    catch {
        functionError = true;
        functionErrorText = "Only variable x is allowed!";
    }

    // Interval
    const [lowerX, setLowerX] = useState(1);
    const [upperX, setUpperX] = useState(4);
    let intervalError = false;
    let lowerXErrorText = "";
    let upperXErrorText = "";
    if (isNaN(lowerX)) {
        intervalError = true;
        lowerXErrorText = "x value cannot be empty!";
    }
    if (isNaN(upperX)) {
        intervalError = true;
        upperXErrorText = "x value cannot be empty!";
    }
    if (lowerX >= upperX) {
        intervalError = true;
        lowerXErrorText = "Lower x must be lower than upper x!";
        upperXErrorText = "Upper x must be higher than lower x!";
    }

    // Subintervals
    const [subIntervals, setSubIntervals] = useState(10);
    let subIntervalsError = false;
    let subIntervalsErrorText = "";
    if (isNaN(subIntervals) || !Number.isInteger(subIntervals) || subIntervals <= 0) {
        subIntervalsError = true;
        subIntervalsErrorText = "Subintervals must be a positive integer!";
    }
    else if (subIntervals % 2 !== 0) {
        subIntervalsError = true;
        subIntervalsErrorText = "Subintervals must be an even integer!";
    }

    let hasError = functionError || intervalError || subIntervalsError;

    // Solve
    let latexContent, graphCallback;
    let solve = false;
    if (isValidMath(functionValue) && !hasError) {
        solve = true;
        const width = (upperX - lowerX) / subIntervals;
        let integralResult = 0;
        let results = [];
        for (let i = 0; i <= subIntervals; i++) {
            const x = lowerX + i * width;
            let f = functionValue.evaluate({x : x});
            if (i === 0 || i === subIntervals){
                integralResult += f;
                results.push(f);
            }
            else {
                if (i % 2 === 0){
                    integralResult += 2 * f;
                    results.push(2 * f);
                }
                else {
                    integralResult += 4 * f;
                    results.push(4 * f);
                }
            }
        }
        integralResult *= width / 3;
        
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ h &=& \frac{ x_{upper} - x_{lower} }{N}
        \\   &=& ${formatLatex(width)}
        \end{array}
        \\
        \\ x_i = x_{lower} + i \cdot h
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ \int_{${lowerX}}^{${upperX}} f(x) dx &=& \frac{h}{3} [f(x_0) + 4 \sum_{i=1, odd}^{${subIntervals - 1}} f(x_i) + 2 \sum_{j=2, even}^{${subIntervals - 2}} f(x_j) + f(x_{${subIntervals}})]
        \\`;
        latexContent += String.raw`
        \\ &=& ${formatLatex(width / 3)} [`;
        for (let i = 0; i <= subIntervals; i++) {
            let coefficient = "";
            if (i > 0 && i < subIntervals){
                if (i % 2 === 0){
                    coefficient = "2";
                }
                else {
                    coefficient = "4";
                }
            }
            latexContent += String.raw`${coefficient}f(${formatLatex(lowerX + i * width)}) ${i===subIntervals ? "" : "+"}`;
        }
        latexContent += String.raw`
        ]
        \\
        \\ &=& ${formatLatex(width / 3)} [`;
        for (let i = 0; i <= subIntervals; i++) {
            latexContent += String.raw`${formatLatex(results[i])} ${i===subIntervals ? "" : "+"}`;
        }
        latexContent += String.raw`
        ]
        \\
        \\ &=& ${formatLatex(integralResult)}
        \end{array}\end{array}
        `;

        graphCallback = (calculator, currentResult) => {
            calculator.current.setExpression({ id: 'function', color: Desmos.Colors.BLUE, latex: "f(x)="+functionLatex});
            calculator.current.setExpression({ id: 'a', latex: "a="+lowerX});
            calculator.current.setExpression({ id: 'b', latex: "b="+upperX});
            calculator.current.setExpression({ id: 'n', latex: "n="+subIntervals});
            calculator.current.setExpression({ id: 'g', latex: String.raw`g\left(x\right)=f\left(x\right)\left\{a\le x\le b\right\}`});
            calculator.current.setExpression({ id: 'shade', color: Desmos.Colors.BLACK, lineStyle: Desmos.Styles.DASHED, latex: String.raw`\min\left(0,g\left(x\right)\right)\le y\le\max\left(0,g\left(x\right)\right)`});
            calculator.current.setExpression({ id: 'i', latex: String.raw`i=\left[1...n\right]`});
            calculator.current.setExpression({ id: 'sOdd', latex: String.raw`S_{i3}=\left[2,4,...n\right]`});
            calculator.current.setExpression({ id: 'x1', latex: String.raw`x_{1}=a+\left(S_{i3}-2\right)\frac{b-a}{n}`});
            calculator.current.setExpression({ id: 'x2', latex: String.raw`x_{2}=a+\left(S_{i3}-1\right)\frac{b-a}{n}`});
            calculator.current.setExpression({ id: 'x3', latex: String.raw`x_{3}=a+S_{i3}\frac{b-a}{n}`});
            calculator.current.setExpression({ id: 'simpsonShade', color: Desmos.Colors.RED, lineStyle: Desmos.Styles.DASHED, latex: String.raw`\min\left(0,P\left(x\right)\right)\le y\le\max\left(0,P\left(x\right)\right)\left\{x_{1}\le x\le x_{3}\right\}`});
            calculator.current.setExpression({ id: 'xLine1', color: Desmos.Colors.RED, latex: String.raw`x=a+\left(i-1\right)\frac{b-a}{n}\left\{\min\left(0,f\left(a+\left(i-1\right)\frac{b-a}{n}\right)\right)\le y\le\max\left(0,f\left(a+\left(i-1\right)\frac{b-a}{n}\right)\right)\right\}`});
            calculator.current.setExpression({ id: 'xLine2', color: Desmos.Colors.RED, latex: String.raw`x=b\left\{\min\left(0,f\left(b\right)\right)\le y\le\max\left(0,f\left(b\right)\right)\right\}`});
            calculator.current.setExpression({ id: 'sn', latex: String.raw`S_{n}=\frac{1}{3}\cdot\frac{b-a}{n}\left(f\left(a\right)+\sum_{t=1}^{\frac{n}{2}}4f\left(a+\left(2t-1\right)\frac{b-a}{n}\right)+\sum_{t=1}^{\frac{n}{2}-1}2f\left(a+2t\frac{b-a}{n}\right)+f\left(b\right)\right)`});
            calculator.current.setExpression({ id: 'p', latex: String.raw`P\left(x\right)=f\left(x_{1}\right)\cdot\frac{x-x_{2}}{x_{1}-x_{2}}\cdot\frac{x-x_{3}}{x_{1}-x_{3}}+f\left(x_{2}\right)\cdot\frac{x-x_{1}}{x_{2}-x_{1}}\cdot\frac{x-x_{3}}{x_{2}-x_{3}}+f\left(x_{3}\right)\cdot\frac{x-x_{1}}{x_{3}-x_{1}}\cdot\frac{x-x_{2}}{x_{3}-x_{2}}\left\{x_{1}\le x\le x_{3}\right\}`});
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
    
    return (
        <>
            <Header methodName = {methodName} />
            <Paper className={styleClasses.paper}>
                <Container className={styleClasses.container}>
                <Zoom duration={500} triggerOnce cascade>
                    <Typography variant="body1">
                        If even subintervals, 2nd order polynomial/parabola.
                    </Typography>
                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="function-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Function:
                                    </Typography>
                                    <EditableMathField
                                        disabled={false}
                                        latex={functionLatex}
                                        onChange={(mathField) => {
                                            setFunctionText(mathField.text());
                                            setFunctionLatex(mathField.latex());
                                        }}
                                        mathquillDidMount={(mathField) => {
                                            setFunctionText(mathField.text())
                                        }}
                                    />
                                    <Collapse in={functionError}>
                                        <Alert severity="error">
                                            {functionErrorText}
                                        </Alert>
                                    </Collapse>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item className="subIntervals-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Subintervals, N:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setSubIntervals(parseInt(event.target.value))}
                                        error={subIntervalsError}
                                        label={subIntervalsError?"Error":""}
                                        defaultValue={subIntervals.toString()}
                                        helperText={subIntervalsErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid className="interval-input" container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Lower x value:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setLowerX(parseFloat(event.target.value))}
                                        error={intervalError}
                                        label={intervalError?"Error":""}
                                        defaultValue={lowerX.toString()}
                                        helperText={lowerXErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item>
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Upper x value:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setUpperX(parseFloat(event.target.value))}
                                        error={intervalError}
                                        label={intervalError?"Error":""}
                                        defaultValue={upperX.toString()}
                                        helperText={upperXErrorText}
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
                                        <Graph params={{iterations: 0, functionLatex, graphCallback, smallScreen}} />
                                    </Slide>
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

export default IntegralSimpson;