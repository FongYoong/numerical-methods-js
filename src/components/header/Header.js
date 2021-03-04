import styles from './Header.module.css';
import MethodInfo from '../MethodInfo';
import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import {generatePath} from "../utils";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    homeButton: {
      marginRight: theme.spacing(0),
    },
    githubButton: {
        marginRight: theme.spacing(0),
    },
    infoButton: {
        marginRight: theme.spacing(0),
    },
}));

const dialogStyles = (theme) => ({
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialogTitle = withStyles(dialogStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
  root: {
    overflow: 'visible',
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function Header({methodName, markdown}) {
    const styleClasses = useStyles();

    let title = methodName? methodName:"Numerical Methods";

    const [dialogOpen, setDialogOpen] = React.useState(false);
    const handleOpenInfoDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseInfoDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className={styleClasses.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton rel="noopener noreferrer" href="https://github.com/FongYoong/numerical-methods-js" target="_blank" edge="start" className={styleClasses.githubButton} color="inherit" aria-label="GitHub">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton component={Link} to={generatePath()} edge="start" className={styleClasses.homeButton} color="inherit" aria-label="Home">
                        <HomeIcon />
                    </IconButton>
                    {methodName &&
                        <IconButton onClick={handleOpenInfoDialog} className={styleClasses.infoButton} edge="start" color="inherit" aria-label="Info">
                            <InfoIcon />
                        </IconButton>
                    }
                    <Fade>
                        <Typography variant="h6" className={styleClasses.title}>
                            {title}
                        </Typography>
                    </Fade>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Dialog open={dialogOpen} onClose={handleCloseInfoDialog} TransitionComponent={Transition}>
                <DialogTitle onClose={handleCloseInfoDialog}>
                    Info
                </DialogTitle>
                <DialogContent dividers>
                    <MethodInfo markdown={markdown} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default Header;