import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from './components/HomePage'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={HomePage}/>
    </div>
  </Router>
);

export default AppRouter;