import { RECIEVE_MOVIES_LIST } from '../actions/types/movies'

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_MOVIES_LIST:
      const { name, movies } = action
      return {
        ...state,
        [name]: movies
      }
      break;
    default: 
      return state;
  }
}