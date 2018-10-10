import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import './assets/styles/main.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route component={Home} />
    </Switch>
  </Router>,
  document.querySelector('#app')
);
