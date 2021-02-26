import {isValidMath, mathjsToLatex, formatLatex} from "../../utils";
import {getBinomialCoefficient} from "../../matrix_utils";
import React, {useState, useEffect, useMemo} from "react";
import Header from "../../header/Header";

import { addStyles, EditableMathField } from 'react-mathquill';
import { parse, derivative } from 'mathjs';
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
        target: ".x-input",
        title: "X value",
        content:
            "Specify the value of x at which to evaluate.",
    },
    {
        target: ".order-input",
        title: "Order",
        content:
            "Specify the differential order to evaluate.",
    },
    {
        target: ".stepSize-input",
        title: "Step Size",
        content:
            "Specify the step size.",
    },
    {
        target: ".step-math",
        title: "Steps",
        content:
            "The steps for each iteration are shown here.",
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

function DiffMultivariable({methodName}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();

    // Derivative
    // Another sample would be: `3x^2+2x-8`
    const [functionLatex, setFunctionLatex] = useState(String.raw`3x^2+2x-8`);
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

    // x values
    const [xInput, setXInput] = useState(1.5);
    let xInputError = false;
    let xInputErrorText = "";
    if (isNaN(xInput)) {
        xInputError = true;
        xInputErrorText = "x value cannot be empty!";
    }

    // Order
    const [order, setOrder] = useState(4);
    let orderError = false;
    let orderErrorText = "";
    if (isNaN(order) || !Number.isInteger(order) || order <= 0) {
        orderError = true;
        orderErrorText = "Order must be a positive integer!";
    }
    else if (order > 14) {
        orderError = true;
        orderErrorText = "Order too high! Due to the factorial nature of the finite difference, the browser will lag or crash if it attempts to compute this.";
    }

    // Step Size
    const [stepSize, setStepSize] = useState(0.01);
    let stepSizeError = false;
    let stepSizeErrorText = "";
    if (isNaN(stepSize) || stepSize <= 0) {
        stepSizeError = true;
        stepSizeErrorText = "Step size cannot be negative or zero!";
    }

    let hasError = functionError || xInputError || orderError || stepSizeError;

    const derivValue = useMemo(() => {
        let d = derivative(functionValue, 'x');
        [...Array(order - 1).keys()].forEach((v, i) => {
            d = derivative(d, 'x');
        });
        return d;
    }, [functionValue, order]);

    // Solve
    let latexContent;
    let solve = false;
    if (isValidMath(functionValue) && !hasError) {
        solve = true;

        const evaluateFunction = (forward, offset) => {
            const step = offset * stepSize ;
            return forward ? functionValue.evaluate({x : xInput + step}) : functionValue.evaluate({x : xInput - step});
        }

        const denominator = Math.pow(stepSize, order);
        let forwardDiff = 0;
        for (let i = 0; i <= order; i++) {
            forwardDiff += Math.pow(-1, order - i) * getBinomialCoefficient(order, i) * evaluateFunction(true, i) / denominator;
        }
        let backwardDiff = 0;
        for (let i = 0; i <= order; i++) {
            backwardDiff += Math.pow(-1, i) * getBinomialCoefficient(order, i) * evaluateFunction(false, i) / denominator;
        }
        let centralDiff = 0;
        if (order > 1) {
            for (let i = 0; i <= order; i++) {
                centralDiff += Math.pow(-1, i) * getBinomialCoefficient(order, i) * evaluateFunction(true, order/2 - i) / denominator;
            }
        }
        else {
            // To adhere to lecturer's annoying convention
            centralDiff = (evaluateFunction(true, 1) - evaluateFunction(false, 1)) / (2 * stepSize);
        }

        const correctDerivative = derivValue.evaluate({x : xInput});

        const forwardError = Math.abs(correctDerivative - forwardDiff);
        const backwardError = Math.abs(correctDerivative - backwardDiff);
        const centralError = Math.abs(correctDerivative - centralDiff);
        
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ f^{${order}}(x) &=& ${mathjsToLatex(derivValue)}
        \\                 &=& ${formatLatex(correctDerivative)}
        \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ \text{Forward difference} &=& \frac{1}{${order === 1 ? "h" : `h^{${order}}`}} \sum_{i=0}^${order} \left[ (-1)^{${order}-i} \dbinom{${order}}{i} f(x+ih) \right]
        \\
        \\ &=& \frac{1}{${order === 1 ? formatLatex(stepSize) : `${formatLatex(stepSize)}^{${order}}`}} [
        `;
        for (let i = 0; i <= order; i++) {
            //forwardDiff += Math.pow(-1, order - i) * getBinomialCoefficient(order, i) * evaluateFunction(true, i) / denominator;
            latexContent += String.raw`
            (${Math.pow(-1, order - i)})(${getBinomialCoefficient(order, i)})(${formatLatex(evaluateFunction(true, i))}) ${i===order? '':'+'}
            `;
        }
        latexContent += String.raw`
        ]
        \\
        \\ &=& ${formatLatex(forwardDiff)}
        \end{array}
        `;
        latexContent += String.raw`
        \\
        \begin{array}{lcl}
        \\ \text{Backward difference} &=& \frac{1}{${order === 1 ? "h" : `h^{${order}}`}} \sum_{i=0}^${order} \left[ (-1)^{i} \dbinom{${order}}{i} f(x-ih) \right]
        \\
        \\ &=& \frac{1}{${order === 1 ? formatLatex(stepSize) : `${formatLatex(stepSize)}^{${order}}`}} [
        `;
        for (let i = 0; i <= order; i++) {
            // backwardDiff += Math.pow(-1, i) * getBinomialCoefficient(order, i) * evaluateFunction(false, i) / denominator;
            latexContent += String.raw`
            (${Math.pow(-1, i)})(${getBinomialCoefficient(order, i)})(${formatLatex(evaluateFunction(false, i))}) ${i===order? '':'+'}
            `;
        }
        latexContent += String.raw`
        ]
        \\
        \\ &=& ${formatLatex(backwardDiff)}
        \end{array}
        `;

        if (order === 1) {
            latexContent += String.raw`
            \\
            \begin{array}{lcl}
            \\ \text{Central difference} &=& \frac{1}{2h} [f(x+h) - f(x-h)]
            \\
            \\ &=& \frac{1}{${formatLatex(2*stepSize)}} [${formatLatex(evaluateFunction(true, 1))} - ${formatLatex(evaluateFunction(false, 1))} ]
            \\
            \\ &=& ${formatLatex(centralDiff)}
            \end{array}
            `;
        }
        else {
            latexContent += String.raw`
            \\
            \begin{array}{lcl}
            \\ \text{Central difference} &=& \frac{1}{h^{${order}}} \sum_{i=0}^${order} \left[ (-1)^{i} \dbinom{${order}}{i} f(x+(\frac{n}{2}-i)h) \right]
            \\
            \\ &=& \frac{1}{${formatLatex(stepSize)}^{${order}}} [
            `;
            for (let i = 0; i <= order; i++) {
                latexContent += String.raw`
                (${Math.pow(-1, i)})(${getBinomialCoefficient(order, i)})(${formatLatex(evaluateFunction(true, order/2 - i))}) ${i===order? '':'+'}
                `;
            }
            latexContent += String.raw`
            ]
            \\
            \\ &=& ${formatLatex(backwardDiff)}
            \end{array}
            `;
        }

        latexContent += String.raw`
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ \text{Percentage Error} &=& |Actual - Estimate|
        \\
        \\ E_{Forward} &=& ${formatLatex(forwardError)}
        \\ E_{Backward} &=& ${formatLatex(backwardError)}
        \\ E_{Central} &=& ${formatLatex(centralError)}
        \end{array}\end{array}
        `;
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
                        <Grid xs item className="x-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        x:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setXInput(parseFloat(event.target.value))}
                                        error={xInputError}
                                        label={xInputError?"Error":""}
                                        defaultValue={xInput.toString()}
                                        helperText={xInputErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} direction="row" alignItems="center" justify="center">
                        <Grid xs item className="order-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Order:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setOrder(parseInt(event.target.value))}
                                        error={orderError}
                                        label={orderError?"Error":""}
                                        defaultValue={order.toString()}
                                        helperText={orderErrorText}
                                        variant="outlined"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs item className="stepSize-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Step size, h:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setStepSize(parseFloat(event.target.value))}
                                        error={stepSizeError}
                                        label={stepSizeError?"Error":""}
                                        defaultValue={stepSize.toString()}
                                        helperText={stepSizeErrorText}
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

export default DiffMultivariable;