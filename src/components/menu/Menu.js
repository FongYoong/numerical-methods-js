import Header from "../header/Header";
import Category from "./Category";
import categories from "../../constants/categories";
import {generatePath} from "../utils";
import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Fade, Zoom, Slide, JackInTheBox } from "react-awesome-reveal";

import {
  useHistory,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Menu() {
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
                <Category category={category} methods={category.methods} onMethodClick={onMethodClick} styleClasses={styleClasses}/>
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