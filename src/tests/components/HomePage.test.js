import React from 'react'
import { HomePage } from '../../components/HomePage'
import { shallow } from 'enzyme'
import { lists } from '../fixtures'

it('should render homePage correctly with lists', () => {
  const wrapper = shallow(<HomePage lists={lists} />)
  expect(wrapper).toMatchSnapshot()
})

it('should render homePage correctly without lists', () => {
  const wrapper = shallow(<HomePage  />)
  expect(wrapper).toMatchSnapshot()
})