import React from 'react'
import { SliderArrowPrev, SliderArrowNext } from '../../components/SliderArrow'
import { shallow } from 'enzyme'

it('should render SliderArrowPrev component correctly', () => {
  expect(shallow(<SliderArrowPrev />)).toMatchSnapshot()
})

it('should render SliderArrowPrev component correctly', () => {
  expect(shallow(<SliderArrowNext />)).toMatchSnapshot()
})

