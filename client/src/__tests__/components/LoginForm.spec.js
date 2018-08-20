import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import LoginPage from '../../Component/Auth/LoginForm'

describe('<LoginPage />', () => {
  let wrapper
  beforeEach(() => {
    const mockStore = configureStore()
    const store = mockStore()
    wrapper = renderer.create(
      <MemoryRouter>
        <LoginPage store={store} />
      </MemoryRouter>
    )
  })
  it('should render <LoginPage /> correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})