import { call, put, takeEvery } from "redux-saga/effects"

import { REQUEST_MOVIES_LISTS } from './actions/types/movies'
import { recieveMoviesLists } from './actions/creators/movies'
import { fetchLists } from './fetch'

export function* getMoviesLists({ lists }) {
  try {
    const data = yield call(fetchLists, lists)
    yield put(recieveMoviesLists(data))
  } catch (e) {
    console.log(e)
  }
}

export function* moviesList() {
  yield takeEvery( REQUEST_MOVIES_LISTS, getMoviesLists)
}