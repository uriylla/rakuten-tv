import { call, put, takeEvery } from "redux-saga/effects"

import { REQUEST_MOVIES_LISTS } from './actions/types/movies'
import { recieveMoviesLists } from './actions/creators/movies'
import { fetchLists } from './fetch'

const filterMovieData = ({id, title, images, highlighted_score}) => ({id, name: title, artwork_url: images.artwork, highlighted_score})

const processListData = (data) => (
  data
    .filter(list => !!list.data)
    .map(listData => (listData && {
      name: listData.data.name,
      id: listData.data.id,
      movies: listData.data.contents.data.map(movie => filterMovieData(movie))
    }))
)

export function* getMoviesLists({ lists }) {
  try {
    const data = yield call(fetchLists, lists)
    yield put(recieveMoviesLists(processListData(data)))
  } catch (e) {
    console.log(e)
  }
}

export function* moviesList() {
  yield takeEvery( REQUEST_MOVIES_LISTS, getMoviesLists)
}