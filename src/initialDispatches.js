import { requestMoviesLists } from './actions/creators/movies'
import settings from './settings'

export default (store) => {
    store.dispatch(requestMoviesLists(settings.lists))
}