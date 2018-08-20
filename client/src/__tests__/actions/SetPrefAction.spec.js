import configureStore from 'redux-mock-store'
import { settingPref } from '../../store/actions/user'

describe('Setting user preferences action', () => {
  test('Dispatches the correct action and payload', () => {
    const mockStore = configureStore()
    const store = mockStore()
    store.clearActions()
    const mockData = {
      language: 'EN',
      timezone: '-12.0',
      currency: 'USD',
      profileType: 'all',
      messageType: 'follow',
      categoryType: 'enable'
    }

    store.dispatch(settingPref(mockData))
    expect(store.getActions()).toMatchSnapshot()
  })
})