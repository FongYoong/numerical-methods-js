import {isValidMath, mathjsToLatex, formatLatex} from "../../utils";
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
            "Specify the number of subintervals, N.",
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

function IntegralMidpoint({methodName}) {
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

    let hasError = functionError || intervalError || subIntervalsError;

    // Solve
    let latexContent, graphCallback;
    let solve = false;
    if (isValidMath(functionValue) && !hasError) {
        solve = true;
        const width = (upperX - lowerX) / subIntervals;
        let results = [];
        let integralResult = 0;
        for (let i = 0; i < subIntervals; i++) {
            const x1 = lowerX + i * width;
            const x2 = x1 + width;
            const x = (x1 + x2) / 2;
            let f = functionValue.evaluate({x : x});
            integralResult += f;
            results.push(f);
        }
        integralResult *= width; 
        
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ h &=& \frac{ x_{upper} - x_{lower} }{N}
        \\   &=& ${formatLatex(width)}
        \end{array}
        \\
        \\ x_i = x_{lower} + i \cdot h
        \\ x_{i+1} = x_i + h
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ \int_{${lowerX}}^{${upperX}} f(x) dx &=& h \sum_{i=1}^{${subIntervals}} \left[ f(\frac{x_i + x_{i+1}}{2}) \right]
        \\`;
        latexContent += String.raw`
        \\ &=& ${formatLatex(width)} [`;
        for (let i = 0; i < subIntervals; i++) {
            latexContent += String.raw`f(\frac{${formatLatex(lowerX + i * width)} + ${formatLatex(lowerX + (i+1) * width)}}{2}) ${i===subIntervals - 1 ? "" : "+"}`;
        }
        latexContent += String.raw`
        ]
        \\
        \\ &=& ${formatLatex(width)} [`;
        for (let i = 0; i < subIntervals; i++) {
            latexContent += String.raw`${formatLatex(results[i])} ${i===subIntervals - 1 ? "" : "+"}`;
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
            calculator.current.setExpression({ id: 'N', latex: "N="+subIntervals});
            calculator.current.setExpression({ id: 'L', latex: String.raw`L=\left[a,\ a+\frac{\left(b-a\right)}{N},\ a+\frac{2\left(b-a\right)}{N},...,a+\frac{\left(N-1\right)\left(b-a\right)}{N}\right]`});
            calculator.current.setExpression({ id: 'R', latex: String.raw`R=\left[a+\frac{\left(b-a\right)}{N},a+\frac{2\left(b-a\right)}{N},\ ...,b\right]`});
            calculator.current.setExpression({ id: 'M', latex: String.raw`M=\frac{\left(f\left(R\right)-f\left(L\right)\right)}{R-L}`});
            calculator.current.setExpression({ id: 'm', latex: String.raw`m=\left[a+\frac{.5\left(b-a\right)}{N},a+\frac{3}{2}\cdot\frac{\left(b-a\right)}{N},...,b-\frac{\left(\frac{1}{2}\right)\left(b-a\right)}{N}\right]`});
            calculator.current.setExpression({ id: 'xPos', color: Desmos.Colors.RED, latex: String.raw`x=R\left\{0\le y\le f\left(m\right)\left\{L\le x\le R\right\}\right\}`});
            calculator.current.setExpression({ id: 'xNeg', color: Desmos.Colors.GREEN, latex: String.raw`x=R\left\{0>y>f\left(m\right)\left\{L\le x\le R\right\}\right\}`});
            calculator.current.setExpression({ id: 'positive', color: Desmos.Colors.GREEN, latex: String.raw`0\le y\le f\left(m\right)\left\{L\le x\le R\right\}`});
            calculator.current.setExpression({ id: 'negative', color: Desmos.Colors.RED, latex: String.raw`0\ge y\ge f\left(m\right)\left\{L\le x\le R\right\}`});
            for (let i = 0; i < subIntervals; i++) {
                const x1 = lowerX + i * width;
                const x2 = x1 + width;
                const x = (x1 + x2) / 2;
                calculator.current.setExpression({ id: i, color: Desmos.Colors.BLACK, pointStyle: Desmos.Styles.POINT, label: i + 1, showLabel: subIntervals < 20, latex: String.raw`(${x}, ${results[i]})`});
            }
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
                                        <Graph params={{iterations: 0, graphCallback, smallScreen}} />
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

export default IntegralMidpoint;