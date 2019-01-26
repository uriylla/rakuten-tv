import { RECIEVE_MOVIES_LISTS } from '../actions/types/movies'

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_MOVIES_LISTS:
      const { lists } = action
      return {
        ...state,
        lists
      }
      break;
    default:
      return state;
  }
}