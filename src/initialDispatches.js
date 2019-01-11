import { requestMoviesList } from './actions/creators/movies'
import settings from './settings'
export default async (store) => {
  settings.lists.map(list => store.dispatch(requestMoviesList(list)))
}