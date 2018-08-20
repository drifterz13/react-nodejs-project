import React from 'react'
import { shallow } from 'enzyme'
import Aside from '../../Component/Preference/Aside'

describe('<Aside />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Aside />)
  })
  it('should render <Aside /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})