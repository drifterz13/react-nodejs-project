import React from 'react'
import { shallow } from 'enzyme'
import Privacy from '../../Component/Preference/Privacy'

describe('<Privacy />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Privacy />)
  })
  it('should render <Privacy /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})