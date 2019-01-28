import React from 'react'
import { MovieList } from '../../components/MovieList'
import { shallow } from 'enzyme'
import { lists } from '../fixtures'

it('should render MoviesList component correctly', () => {
  expect(shallow(<MovieList movies={lists[0].movies} />))
})

