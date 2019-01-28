import React from 'react'
import { shallow, mount } from 'enzyme'
import { TrailerPage } from '../../components/TrailerPage'

it('should render TrailerPage correctly', () => {
  const wrapper = shallow(<TrailerPage />)
  expect(wrapper).toMatchSnapshot()
})

it('should render go to MoviePage on back button click', () => {
  const id = 'matrix'
  const videojs = () => {}
  const pushSpy = jest.fn()
  const wrapper = shallow(<TrailerPage id={id} history={{push: pushSpy}}/>)
  wrapper.find('.trailer-page__back').simulate('click')
  expect(pushSpy).toHaveBeenCalledWith(`/movie/${id}`)
})