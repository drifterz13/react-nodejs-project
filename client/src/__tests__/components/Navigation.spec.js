import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../../Component/Header/Navigation'

describe('<Navigation />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Navigation />)
  })
  it('should render <Navigation /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})