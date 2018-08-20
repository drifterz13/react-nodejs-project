import configureStore from 'redux-mock-store'
import { loggedIn } from '../../store/actions/user'

describe('User login action', () => {
  test('Dispatches the correct action and payload', () => {
    const mockStore = configureStore()
    const store = mockStore()
    store.clearActions()
    const mockData = {
      username: 'test',
      email: 'test@test.com',
      password: 'test'
    }
    store.dispatch(loggedIn(mockData))
    expect(store.getActions()).toMatchSnapshot()
  })
})