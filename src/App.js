import logo from './logo.svg';
import styles from './App.module.css';

import React from "react";
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
  /*
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  */
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
          <Switch>

            <Route exact path={generatePath()}>
              <Menu />
            </Route>
            {
              categories.map((category, i) => (
                category.methods.map((method, j) => (
                  <Route key={i + j} exact path={generatePath(category.path, method.path)}
                  component={
                    () => <method.component methodName={method.name} />
                  } />
                ))
              )).reduce((previous, next) => previous.concat(next), [])
            }
            <Route component={NotFound} />
          </Switch>
        </div>
      </Container>
    </div>
  );
}

export default App;




/*

<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>


const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" }
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash and place in the oven for 30 mins.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Remove from oven. Add the lettuce and serve."
    ]
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" }
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese."
    ]
  }
];

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient.name}</li>
        ))}
      </ul>
      <section className="instructions">
        <h2>Cooking Instructions</h2>
        {steps.map((step, i) => (
        <p key={i}>{step}</p>
        ))}
      </section>
    </section>
  );
}

function Menu({ title, recipes }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
        <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}
*/