import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import HomePage from './components/HomePage'
import MoviePage from './components/MoviePage'
import TrailerPage from './components/TrailerPage'
import Header from './components/Header'
import withMovie from './helpers/withMovie'
import withTrailer from './helpers/withTrailer'

export const history = createHistory()

const MoviePageContainer = withMovie(MoviePage)
const TrailerPageContainer = withTrailer(TrailerPage)

const AppRouter = () => (
  <Router history={history}>
    <React.Fragment>
      <Route path="/" component={Header} exact={true}/>
      <Route path="/" component={HomePage} exact={true}/>
      <Route path="/movie/:id" exact={true} render={ props =>
        <React.Fragment>
          <Header {...props}/>
          <MoviePageContainer {...props} id={props.match.params.id} />
        </React.Fragment>
      }/>
      <Route path="/movie/:id/trailer" render={ props =>
        <TrailerPageContainer {...props} id={props.match.params.id} />
      }/>
    </React.Fragment>
  </Router>
);

export default AppRouter;