import { requestMoviesLists, recieveMoviesLists } from '../../actions/creators/movies'
import { REQUEST_MOVIES_LISTS, RECIEVE_MOVIES_LISTS } from '../../actions/types/movies'
import { lists } from '../../settings'

it('should create requestMoviesLists action object correctly', () => {
  const action = requestMoviesLists(lists)
  expect(action).toEqual({
    type: REQUEST_MOVIES_LISTS,
    lists
  })
})

it('should create recieveMoviesList action object correctly', () => {
  const action = recieveMoviesLists(lists)
  expect(action).toEqual({
    type: RECIEVE_MOVIES_LISTS,
    lists
  })
})