import React from 'react'
import { Header } from '../../components/Header'
import { shallow } from 'enzyme'

it('should render Header correctly when the movie is set', () => {
  const wrapper = shallow(<Header movie="Matrix"/>)
  expect(wrapper).toMatchSnapshot()
})

it('should render Header correctly when the movie is not set', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
})