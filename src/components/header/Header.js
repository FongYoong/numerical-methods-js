import styles from './Header.module.css';

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import {
    useHistory,
} from "react-router-dom";
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
    title: {
    },
}));

function Header({methodName}) {
    const styleClasses = useStyles();

    const history = useHistory();

    const clickHome = () => {
      history.push(generatePath());
    };

    let title = methodName? methodName:"Numerical Methods";
    /*
    if (methodName) {
        title = 
        <Fade>
            <Button component={Link} to={'/'} color="primary">
                {methodName}
            </Button>
        </Fade>;
    }
    else {
        title = 
        <Zoom>
            <Button component={Link} to={'/'} variant="outlined" color="primary">
                Numerical Methods
            </Button>
        </Zoom>;
    }
    */
    return (
        <div className={styleClasses.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={clickHome} edge="start" className={styleClasses.homeButton} color="inherit" aria-label="Home">
                        <HomeIcon />
                    </IconButton>
                    <IconButton rel="noopener noreferrer" href="https://github.com/FongYoong/numerical-methods-js" target="_blank" edge="start" className={styleClasses.githubButton} color="inherit" aria-label="GitHub">
                        <GitHubIcon />
                    </IconButton>
                    <Fade>
                        <Typography variant="h5" className={styleClasses.title}>
                            {title}
                        </Typography>
                    </Fade>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;