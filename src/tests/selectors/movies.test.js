import { movies, lists } from '../fixtures'
import { selectLists, selectListById, getMovieNameById } from '../../selectors/movies'

it('should select lists correctly', () => {
  expect(selectLists(lists)).toEqual(lists)
  expect(selectLists(lists.concat([undefined, undefined]))).toEqual(lists)
})

it('should select list by id', () => {
  const list = selectListById(lists, lists[1].id)
  expect(list).toEqual(lists[1])
})

it('should select movie name by id', () => {
  const name = getMovieNameById({lists}, lists[2].movies[0].id)
  expect(name).toEqual(lists[2].movies[0].name)
})