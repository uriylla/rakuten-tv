import { call, put, takeEvery } from "redux-saga/effects"

import { REQUEST_MOVIES_LIST } from './actions/types/movies'
import { recieveMoviesList } from './actions/creators/movies'
import { fetchList } from './fetch'

export function* getMoviesList({ name }) {
  try {
    const movies = yield call(fetchList, name)
    yield put(recieveMoviesList(name, movies))
  } catch (e) {
    console.log(e)
  }
}

export function* moviesList() {
  yield takeEvery( REQUEST_MOVIES_LIST, getMoviesList)
}