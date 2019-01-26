import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from './components/HomePage'
import MoviePage from './components/MoviePage'
import Header from './components/Header'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={Header}/>
      <Route path="/" component={HomePage} exact={true}/>
      <Route path="/movie/:title" component={MoviePage}/>
    </div>
  </Router>
);

export default AppRouter;