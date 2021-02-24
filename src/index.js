import reportWebVitals from './reportWebVitals';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router} from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Puff from './svg/puff.svg';
const App = lazy(() => import('./App'));

const suspenseLoader = (
  <Fade>
    <div className="suspenseLoader">
      <img alt=" " src={Puff} height="125" width="125"/>
      <p>Wait ahh...</p>
    </div>
  </Fade>
);

ReactDOM.render(
  <Router>
    <Suspense fallback={suspenseLoader}>
      <App />
    </Suspense>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<React.StrictMode>
  <App />
</React.StrictMode>
*/