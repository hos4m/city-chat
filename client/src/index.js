import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound';
import './assets/styles/main.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#app')
);
