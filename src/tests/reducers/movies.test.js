import moviesReducer from '../../reducers/movies'
import { recieveMoviesLists } from '../../actions/creators/movies'
import { lists } from '../fixtures'
it('should recieve movie lists', () => {
  const state = moviesReducer({}, recieveMoviesLists(lists))
  expect(state).toEqual({lists})
})