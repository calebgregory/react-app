'use strict';

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Router, IndexRoute, Route } from 'react-router';
import { createHistory, useBasename } from 'history';

const history = useBasename(createHistory)({
  basename: '/react-app'
});

export default (
  <Router history={history}>
    <Route name="app" path="/" component={Main}>
      <Route name="profile" path="profile/:username" component={Profile} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
)
