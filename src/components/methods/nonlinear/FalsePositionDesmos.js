import {formatLatex, mathjsToLatex} from "../../utils";
import {React, useState, useRef, useEffect, useCallback } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import TimelineIcon from '@material-ui/icons/Timeline';
import { MathComponent } from 'mathjax-react';
import * as Desmos from 'desmos';
import { Fade } from "react-awesome-reveal";

import { withStyles } from '@material-ui/core/styles';
const styleClasses = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styleClasses)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
});

const DialogContent =  withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))((props) => {
    const params = props.params;
    const [currentIteration, setCurrentIteration] = useState(params.currentIteration);
    const defaultIteration = params.currentIteration;
    const currentResult = params.results[currentIteration - 1];
    const desmosDiv = useRef(null);
    const calculator = useRef(null);

    const updateGraph = useCallback(() => {
        if (calculator.current){
            calculator.current.setExpression({ id: 'function', color: Desmos.Colors.BLUE, latex: mathjsToLatex(params.functionValue)});
            calculator.current.setExpression({ id: 'lowerX', color: Desmos.Colors.GREEN, pointStyle: Desmos.Styles.POINT, label: "Lower", showLabel:true, latex:
            `(${formatLatex(currentResult.oldLowerX)}, ${formatLatex(currentResult.lowerFuncResult)})` });
            calculator.current.setExpression({ id: 'upperX', color: Desmos.Colors.GREEN, pointStyle: Desmos.Styles.POINT, label: "Upper", showLabel:true, latex:
            `(${formatLatex(currentResult.oldUpperX)}, ${formatLatex(currentResult.upperFuncResult)})` });
            calculator.current.setExpression({ id: 'root', color: Desmos.Colors.RED, pointStyle: Desmos.Styles.POINT, label: "Root", showLabel:true, latex:
            `(${formatLatex(currentResult.rootX)}, 0)` });
        }
    }, [calculator, params.functionValue, currentResult]);
    updateGraph();

    useEffect(() => {
        if (desmosDiv.current){
            const smallScreen = props.smallScreen;
            desmosDiv.current.style.width = smallScreen?'90vw':'60vw';
            desmosDiv.current.style.height = smallScreen?'90vh':'60vh';
            const desmosOptions = {
                keypad: false,
                expressions: false,
                expressionsTopbar: false,
            };
            calculator.current = Desmos.GraphingCalculator(desmosDiv.current, desmosOptions);
            updateGraph();
        }
    }, []);

    return (
        
        <Grid container direction="column" alignItems="center" justify="center">
            <Box component="div" overflow="visible">
                <MathComponent tex={`${mathjsToLatex(params.functionValue)}`}/>
            </Box>
            <Typography variant="h6">
                Iteration {currentIteration}:
            </Typography>
            <Box width="70%">
                <Slider
                    orientation="horizontal"
                    onChange={(event, value) => setCurrentIteration(value)}
                    defaultValue={defaultIteration}
                    aria-labelledby="discrete-slider-small-steps"
                    step={1}
                    marks
                    min={1}
                    max={params.iterations}
                    valueLabelDisplay="auto"
                />
            </Box>
            <Grid item>
                <div ref={desmosDiv}>
                </div>
            </Grid>
        </Grid>
    );

});

function FalsePositionDesmos({params, smallScreen}) {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };
      const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Button variant="contained" color="primary" endIcon={<TimelineIcon/>} onClick={handleClickOpen}>
                View Graph
            </Button>
            
            <Dialog scroll='paper' maxWidth={false} fullScreen={smallScreen} onClose={handleClose} aria-labelledby="customized-dialog-title" open={openDialog}>
                <Fade>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose} />
                    <DialogContent dividers smallScreen={smallScreen} params={params} />
                </Fade>
            </Dialog>
        </>
    );
}

export default FalsePositionDesmos;