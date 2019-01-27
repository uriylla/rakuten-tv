import { RECIEVE_MOVIES_LISTS, SELECT_MOVIE, UNSELECT_MOVIE } from '../actions/types/movies'

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_MOVIES_LISTS:
      const { lists } = action
      return {
        ...state,
        lists
      }
    default:
      return state;
  }
}