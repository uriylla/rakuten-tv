import { RECIEVE_MOVIES_LISTS, SELECT_MOVIE, UNSELECT_MOVIE } from '../actions/types/movies'

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_MOVIES_LISTS:
      const { lists } = action
      return {
        ...state,
        lists
      }
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: {
          id: action.id,
          name: action.name
        }
      }
      break;
    case UNSELECT_MOVIE:
      return {
        ...state,
        selectedMovie: undefined
      }
      break;
    default:
      return state;
  }
}