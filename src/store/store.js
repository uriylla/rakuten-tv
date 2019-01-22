import { createStore, applyMiddleware, compose } from "redux"
import movies from '../reducers/movies'

import createSagaMiddleware from 'redux-saga'

import { moviesList } from '../sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  movies,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(moviesList)

export default store
