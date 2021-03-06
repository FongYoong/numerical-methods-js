import {isValidMath, mathjsKeywords, formatLatex} from "../../utils";
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
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
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
        target: ".points-input",
        title: "Random Points",
        content:
            "Specify the number of random points.",
    },
    {
        target: ".interval-input",
        title: "Interval",
        content:
            "Select the lower and upper bounds of x",
    },
    {
        target: ".regenerate-button",
        title: "Regenerate Random Points",
        content:
            "Click this to regenerate random points.",
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

function IntegralMonteCarlo({methodName, markdown}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();
    const smallScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    // Function
    const [functionLatex, setFunctionLatex] = useState(String.raw`\left(x-3\right)^{3}+2\left(x-3\right)^{2}-1`);
    const [functionText, setFunctionText] = useState('');

    let functionNode;
    let functionError = false;
    let functionErrorText = "";
    try {
        functionNode = parse(functionText);
        functionNode.traverse(function (node, path, parent) {
            if (node.type === 'SymbolNode' && !mathjsKeywords.includes(node.name)) {
                if (node.name !== 'x') {
                    throw "variableName";
                }
            }
        });
        functionNode.evaluate({x : 0});
    }
    catch(e) {
        functionError = true;
        functionErrorText = e === "variableName" ? "Only x variable is allowed." :  "Invalid equation!";
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

    // Random Points
    const [points, setPoints] = useState(10000);
    let pointsError = false;
    let pointsErrorText = "";
    if (isNaN(points) || !Number.isInteger(points) || points <= 0) {
        pointsError = true;
        pointsErrorText = "Random points must be a positive integer!";
    }

    let hasError = functionError || intervalError || pointsError;

    // Solve
    const plotDesmosPoints = 200;
    let latexContent, graphCallback;
    let results = [];
    let solve = false;
    if (isValidMath(functionNode) && !hasError) {
        solve = true;
        
        let yMin = 0;
        let yMax = 0;

        const divisions = 250;
        const multiple = (upperX - lowerX) / divisions;

        for (let i = 0; i <= divisions; i++) {
            const x = lowerX + i * multiple;
            const y = functionNode.evaluate({x : x});
            if (y > yMax) {
                yMax = y;
            }
            else if (y < yMin) {
                yMin = y;
            }
        }

        const paddingX = 0;
        const paddingY = 0;
        let pointsInsidePositive = 0;
        let pointsInsideNegative = 0;

        for (let i = 0; i < points; i++) {
            const randomX = lowerX - paddingX + (upperX - lowerX + 2 * paddingX) * Math.random();
            const actualY = functionNode.evaluate({x : randomX});
            const randomY = yMin - paddingY + (yMax - yMin + 2 * paddingY) * Math.random();
            let inside = false;
            if (actualY >= 0 && randomY >= 0 && randomY <= actualY) {
                inside = true;
                pointsInsidePositive += 1;
            }
            else if (actualY < 0 && randomY < 0 && randomY >= actualY) {
                inside = true;
                pointsInsideNegative += 1;
            }
            results.push({x: randomX, y: randomY, inside});
        }
        const rectArea = (yMax - yMin) * (upperX - lowerX);
        const positiveIntegral = rectArea * pointsInsidePositive / points;
        const negativeIntegral = rectArea * pointsInsideNegative / points;
        const integralResult = positiveIntegral - negativeIntegral;
        
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \begin{array}{lcl}
        \\ y_{max} = ${formatLatex(yMax)}
        \\ y_{min} = ${formatLatex(yMin)}
        \end{array}
        \\
        \begin{array}{lcl}
        \\ \text{Rectangle area} &=& y_{max} \cdot y_{min} \cdot x_{lower} \cdot y_{upper}
        \\                       &=&= ${formatLatex(rectArea)}
        \end{array}
        \\
        \\ \hline
        \begin{array}{lcl}
        \\ \text{Points inside positive area} &=& ${formatLatex(pointsInsidePositive)}
        \\ \text{Points inside negative area} &=& ${formatLatex(pointsInsideNegative)}
        \end{array}
        \\
        \begin{array}{lcl}
        \\ \text{Positive area}&=& \text{Rectangle area} \cdot \frac{\text{Points inside positive area}}{\text{Total points}}
        \\
        \\ &=& ${formatLatex(rectArea)} \cdot \frac{${formatLatex(pointsInsidePositive)}}{${formatLatex(points)}}
        \\
        \\ &=& ${formatLatex(positiveIntegral)}
        \\
        \\ \text{Negative area}&=& \text{Rectangle area} \cdot \frac{\text{Points inside negative area}}{\text{Total points}}
        \\
        \\ &=& ${formatLatex(rectArea)} \cdot \frac{${formatLatex(pointsInsideNegative)}}{${formatLatex(points)}}
        \\
        \\ &=& ${formatLatex(negativeIntegral)}
        \\
        \\ \text{Total area/integral} &=& \text{Positive area} - \text{Negative area}
        \\                   &=& ${formatLatex(integralResult)}
        \end{array}\end{array}
        `;

        graphCallback = (calculator, currentResult) => {
            calculator.current.setExpression({ id: 'function', color: Desmos.Colors.BLUE, latex: "f(x)="+functionLatex});
            calculator.current.setExpression({ id: 'a', latex: "a="+lowerX});
            calculator.current.setExpression({ id: 'b', latex: "b="+upperX});
            calculator.current.setExpression({ id: 'shadedArea', latex: String.raw`\left\{f\left(x\right)>0:\ 0,\ f\left(x\right)<0:\ f\left(x\right)\right\}<y<\ \left\{f\left(x\right)>0:\ f\left(x\right),\ f\left(x\right)<0:\ 0\right\}\left\{a<x<b,\ b<x<a\right\}`});
            calculator.current.setExpression({ id: 'leftVertical', color: Desmos.Colors.ORANGE, latex: String.raw`x=${lowerX} \left\{${yMin}<y<${yMax}\right\}`});
            calculator.current.setExpression({ id: 'rightVertical', color: Desmos.Colors.ORANGE, latex: String.raw`x=${upperX} \left\{${yMin}<y<${yMax}\right\}`});
            calculator.current.setExpression({ id: 'upperHori', color: Desmos.Colors.ORANGE, latex: String.raw`y=${yMax} \left\{${lowerX}<x<${upperX}\right\}`});
            calculator.current.setExpression({ id: 'lowerHori', color: Desmos.Colors.ORANGE, latex: String.raw`y=${yMin} \left\{${lowerX}<x<${upperX}\right\}`});
            if (results.length > plotDesmosPoints) {
                for (let i = 0; i < plotDesmosPoints; i++) {
                    const value = results[Math.floor(Math.random() * results.length)];
                    calculator.current.setExpression({ id: `r${i}`, color: value.inside ? Desmos.Colors.GREEN : Desmos.Colors.RED, pointStyle: Desmos.Styles.POINT, latex: `(${value.x}, ${value.y})` });
                }
            }
            else {
                results.forEach((value, i) => {
                    calculator.current.setExpression({ id: `r${i}`, color: value.inside ? Desmos.Colors.GREEN : Desmos.Colors.RED, pointStyle: Desmos.Styles.POINT, latex: `(${value.x}, ${value.y})` });
                })
            }
        }
    }

    const [regenerate, setRegenerate] = useState(false); // For the purpose of refreshing the data

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
            <Header methodName={methodName} markdown={markdown} />
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
                        <Grid xs item className="points-input">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Random points:
                                    </Typography>
                                    <TextField
                                        disabled={false}
                                        type="number"
                                        onChange={(event)=>setPoints(parseInt(event.target.value))}
                                        error={pointsError}
                                        label={pointsError?"Error":""}
                                        defaultValue={points.toString()}
                                        helperText={pointsErrorText}
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
                            <Button className="regenerate-button" variant="contained" color="primary" endIcon={<ReplayIcon/>} onClick={() => setRegenerate(!regenerate)}>
                                Regenerate
                            </Button>
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
                                        <Graph params={{iterations: 0, functionLatex, graphCallback, smallScreen,
                                        description: results.length > plotDesmosPoints ? `Only ${plotDesmosPoints} points are plotted for performance reasons.`:""}} />
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

export default IntegralMonteCarlo;