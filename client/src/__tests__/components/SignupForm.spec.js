import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import SignupPage from '../../Component/Auth/SignupForm'

describe('<SignupPage />', () => {
  let wrapper
  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore()
    wrapper = renderer.create(
      <MemoryRouter>
        <SignupPage store={store} />
      </MemoryRouter>
    )
  })
  it('should render <SignupPage /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})