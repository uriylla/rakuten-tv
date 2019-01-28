import React from 'react'
import { MovieThumbnail } from '../../components/MovieThumbnail'
import { shallow } from 'enzyme'
import { lists } from '../fixtures'

it('should render MovieThumbnail component correctly', () => {
  const movie = lists[0].movies[0]
  expect(shallow(<MovieThumbnail {...movie} />))
})


it('should go to MoviePage on click', () => {
  const pushSpy = jest.fn()
  const id = 'matrix'
  const movie = lists[0].movies[0]
  const wrapper = shallow(<MovieThumbnail {...movie} history={{push: pushSpy}} />)
  wrapper.find('.thumbnail__link').simulate('click')
  expect(pushSpy).toHaveBeenCalledWith(`/movie/${movie.id}`)
})

