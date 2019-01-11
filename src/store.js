import { createStore, applyMiddleware, compose } from "redux";
import movies from './reducers/movies';

import createSagaMiddleware from 'redux-saga'

import { moviesList } from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  movies,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(moviesList);

export default store;
