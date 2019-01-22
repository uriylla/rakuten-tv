import { requestMoviesLists, recieveMoviesLists } from './actions/creators/movies'
import settings from './settings'

export default (store) => {
    store.dispatch(recieveMoviesLists(settings.lists))
}