import React from 'react'
import { LogoRakuten } from '../../components/LogoRakuten'
import { shallow } from 'enzyme'

it('should render LogoRakuten component correctly', () => {
  const wrapper = shallow(<LogoRakuten />)
  expect(wrapper).toMatchSnapshot()
})

it('should redirect to the Home on user click for small devices', () => {
  const pushSpy = jest.fn()
  const wrapper = shallow(<LogoRakuten history={{push: pushSpy}} />)
  wrapper.find('.logo-rakuten--sm').simulate('click');
  expect(pushSpy).toHaveBeenCalledWith('/')
})

it('should redirect to the Home on user click for large devices', () => {
  const pushSpy = jest.fn()
  const wrapper = shallow(<LogoRakuten history={{push: pushSpy}} />)
  wrapper.find('.logo-rakuten--lg').simulate('click');
  expect(pushSpy).toHaveBeenCalledWith('/')
})