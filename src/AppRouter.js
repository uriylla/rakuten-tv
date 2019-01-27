import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from './components/HomePage'
import MoviePage from './components/MoviePage'
import Header from './components/Header'
import withMovie from './helpers/withMovie'

export const history = createHistory()

const MoviePageContainer = withMovie(MoviePage)

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={Header} exact={true}/>
      <Route path="/" component={HomePage} exact={true}/>
      <Route path="/movie/:id" render={ props =>
        <React.Fragment>
          <Header {...props}/>
          <MoviePageContainer {...props} id={props.match.params.id} />
        </React.Fragment>
      }/>
    </div>
  </Router>
);

export default AppRouter;