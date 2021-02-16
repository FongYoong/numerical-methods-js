import Header from "../header/Header";
import Category from "./Category";
import categories from "../../constants/categories";
import {generatePath} from "../utils";
import {React, useEffect} from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Fade, Zoom, Slide, JackInTheBox } from "react-awesome-reveal";

import {
  useHistory,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  '@global': {
    "@keyframes gradient": {
      '0%': {
        'background-position': '0% 50%'
      },
      '50%': {
        'background-position': '100% 50%'
      },
      '100%': {
        'background-position': '0% 50%'
      }
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
    transition: 'transform 0.2s',
    "&:hover": {
      'background': 'linear-gradient(45deg, #cbffbb, #bbffe0, #bff4ff, #ffefd0)',
      'background-size': '400% 400%',
      'animation': '$gradient 5s ease infinite'
    },
  },
}));
// 'linear-gradient(45deg, #c9c6ff, #bbffe0, #bff4ff, #ffefd0)'

function Menu() {
  useEffect(() => {
      // Set webpage title
      document.title = "Numerical Methods Web Demo";
  });

  const styleClasses = useStyles();
  const history = useHistory();
  const onMethodClick = ({categoryPath, method}) => {
    history.push(generatePath(categoryPath, method.path));
  };

  return (
      <>
        <Header methodName = {""} />
        <Zoom duration={500} triggerOnce>
        <Grid container spacing={1}>
        {
          categories.map((category, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Paper className={styleClasses.paper}>
                <Category category={category} methods={category.methods} onMethodClick={onMethodClick}/>
              </Paper>
            </Grid>
          ))
        }
        </Grid>
        </Zoom>
      </>
      
  );
}

export default Menu;