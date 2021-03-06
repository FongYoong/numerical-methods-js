import {isValidMath, mathjsToLatex, formatLatex, mathjsKeywords, gaussPoints} from "../../utils";
import React, {useState, useEffect} from "react";
import Header from "../../header/Header";

import { addStyles, EditableMathField } from 'react-mathquill';
import { parse, simplify } from 'mathjs';
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
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
        target: ".points-slider",
        title: "Gauss points",
        content:
            "Choose the number of Gauss points, N, which range from 2 to 6 in this demo.",
    },
    {
        target: ".interval-input",
        title: "Interval",
        content:
            "Select the lower and upper bounds of x",
    },
    {
        target: ".point-table",
        title: "Gauss points table",
        content:
            "The Gauss points and their coefficients are shown here.",
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

function IntegralQuadrature({methodName, markdown}) {
    useEffect(() => {
        // Set webpage title
        document.title = methodName;
    });

    const styleClasses = useStyles();
    const [functionLatex, setFunctionLatex] = useState(String.raw`e^{-x^2}`);
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
    catch (e) {
        functionError = true;
        functionErrorText = e === "variableName" ? "Only x variable is allowed." :  "Invalid equation!";
    }

    // Interval
    const [lowerX, setLowerX] = useState(0);
    const [upperX, setUpperX] = useState(3);
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

    // Points
    const [points, setPoints] = useState(4);

    let hasError = functionError || intervalError;

    // Solve
    let latexContent;
    const p = gaussPoints[points];
    let solve = false;
    if (isValidMath(functionNode) && !hasError) {
        solve = true;
        const transformNode = parse(`1/2*(t * (${upperX} - ${lowerX}) + ${lowerX} + ${upperX} )`);
        const simplifiedTransformNode = simplify(transformNode);
        const factor = (upperX - lowerX) / 2 ;
        let transformedFunction = functionNode.transform(function (node, path, parent) {
            if (node.isSymbolNode && !mathjsKeywords.includes(node.name) && node.name === 'x') {
                return simplifiedTransformNode;
            }
            else {
                return node;
            }
        });
        transformedFunction = parse(String.raw`${factor} * ${transformedFunction.toString()}`);
        let integralResult = 0;
        let functionResults = [];
        for (let i = 0; i < points; i++) {
            const f =  transformedFunction.evaluate({t: p.x[i]});
            functionResults.push(f);
            integralResult += p.c[i] * f;
        }
        
        latexContent = String.raw`
        \displaystyle
        \begin{array}{l}
        \text{First, we transform the integral from variable x to variable t:}
        \\ \begin{array}{lcl}
        \\ x &=& \frac{1}{2} [t(x_{upper} - x_{lower}) + x_{lower} + x_{upper}]
        \\
        \\   &=& ${mathjsToLatex(simplifiedTransformNode)}
        \\
        \\ dx &=& \frac{1}{2} (x_{upper} - x_{lower}) dt
        \\
        \\   &=& ${factor} dt
        \end{array}
        \\ \begin{array}{lcl}
        \\ \int_{${lowerX}}^{${upperX}} f(x) dx &=& \int_{-1}^{1} ${mathjsToLatex(transformedFunction)} dt
        \\
        \\                                      &=&
        `;
        for (let i = 1; i <= points; i++) {
            latexContent += String.raw`C_{${i}} f(t_{${i}}) ${i < points ? "+" : "" }`;
        }
        latexContent += String.raw`\\ \\ &=&`;
        for (let i = 0; i < points; i++) {
            latexContent += String.raw`(${formatLatex(p.c[i])}) f(${formatLatex(p.x[i])}) ${i < points - 1? "+" : "" }`;
        }
        latexContent += String.raw`\\ \\ &=&`;
        for (let i = 0; i < points; i++) {
            latexContent += String.raw`(${formatLatex(p.c[i])}) (${formatLatex(functionResults[i])}) ${i < points - 1? "+" : "" }`;
        }
        latexContent += String.raw`
        \\ \\ &=& ${formatLatex(integralResult)}
        \end{array}\end{array}`;
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
                        <Grid xs item className="points-slider">
                            <Card className={styleClasses.card}>
                                <CardContent className={styleClasses.cardContent}>
                                    <Typography variant="h6">
                                        Gauss Points = {points}
                                    </Typography>
                                    <Box id="points-slider">
                                        <Slider
                                            orientation="horizontal"
                                            onChange={(event, value) => {setPoints(parseInt(value))}}
                                            defaultValue={points}
                                            aria-labelledby="discrete-slider-small-steps"
                                            step={1}
                                            marks={[{value:2, label:2}, {value:6, label:6}]}
                                            min={2}
                                            max={6}
                                            valueLabelDisplay="auto"
                                        />
                                    </Box>
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
                            <Grid container spacing={1} direction="column" alignItems="center" justify="center">
                                <Grid xs item className="point-table">
                                    <Slide direction="up" triggerOnce>
                                        <Table className={styleClasses.table} aria-label="gauss point table">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell>Coefficient</TableCell>
                                                <TableCell>Gauss point</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {[...Array(points).keys()].map((i) => (
                                                <TableRow key={i}>
                                                    <TableCell component="th" scope="row"> {`C${i + 1} = ${formatLatex(p.c[i])}`} </TableCell>
                                                    <TableCell> {`t${i + 1} = ${formatLatex(p.x[i])}`} </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </Slide>
                                </Grid>
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

export default IntegralQuadrature;