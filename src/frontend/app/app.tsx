import * as React from "react";
import { hot } from "react-hot-loader";

import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';

import AnimationPage from './components/AnimationButton';
import RecipePage from './components/Recipe';
import { Switch } from "react-router";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={AnimationPage} />
        <Route path="/main" component={RecipePage} />
      </Switch>
    </div>
  </Router>
);

export default hot(module)(App);
