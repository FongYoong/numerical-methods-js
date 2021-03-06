import styles from './App.module.css';

import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Menu from "./components/menu/Menu";
import NotFound from "./components/NotFound";
import categories from "./constants/categories";
import {generatePath} from "./components/utils";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


import {
  Switch,
  Route,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {

  const styleClasses = useStyles();

  return (
    <div className={styles.App}>
      <CssBaseline />
      <Container>
        <div className={styleClasses.root}>
          <ErrorBoundary>
            <Switch>
              <Route exact path={generatePath()}>
                <Menu />
              </Route>
              {
                categories.map((category, i) => (
                  category.methods.map((method, j) => (
                    <Route key={i + j} exact path={generatePath(category.path, method.path)}
                    component={
                      () => <method.component methodName={method.name} markdown={method.markdown} />
                    } />
                  ))
                )).reduce((previous, next) => previous.concat(next), [])
              }
              <Route component={NotFound} />
            </Switch>
          </ErrorBoundary>
        </div>
      </Container>
    </div>
  );
}

export default App;