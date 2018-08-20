import React from 'react'
import { shallow } from 'enzyme'
import Localize from '../../Component/Preference/Localize'

describe('<Aisde />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Localize />)
  })
  it('should render <Localize /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})