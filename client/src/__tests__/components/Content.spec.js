import React from 'react'
import { shallow } from 'enzyme'
import Content from '../../Component/Preference/Content'

describe('<Content />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Content />)
  })
  it('should render <Content /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})