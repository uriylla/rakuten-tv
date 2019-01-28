import React from 'react'
import { MoviePage } from '../../components/MoviePage'
import { shallow } from 'enzyme'
import { movies } from '../fixtures'

it('should render MoviePage component correctly with movie data', () => {
  expect(shallow(<MoviePage movie={movies[0].data} />))
})

it('should render MoviePage component correctly without movie data', () => {
  expect(shallow(<MoviePage />))
})

it('should go to TrailerPage on click', () => {
  const pushSpy = jest.fn()
  const id = 'matrix'
  const wrapper = shallow(<MoviePage movie={movies[0].data} id={id} history={{push: pushSpy}} />)
  wrapper.find('.movie__trailer-btn').simulate('click')
  expect(pushSpy).toHaveBeenCalledWith(`/movie/${id}/trailer`)
})

