import userReducer from '../../store/reducers/user'

describe('User reducer', () => {
  describe('DEFAULT', () => {
    test('must return initial state', () => {
      const action = { type: 'none_action' }
      const initialState = { info: {}, authenticated: false }
      expect(userReducer(undefined, action)).toMatchSnapshot()
    })
  })
  describe('LOGGED_IN', () => {
    test('return the correct state', () => {
      const payload = {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      }
      const action = { type: 'LOGGED_IN', payload }
      expect(userReducer(undefined, action)).toMatchSnapshot()
    })
  })
  describe('SET_PREF', () => {
    test('return the update preferences', () => {
      const payload = {
        language: 'EN',
        timezone: '-12.0',
        currency: 'USD',
        profileType: 'all',
        messageType: 'follow',
        categoryType: 'enable'
      }
      const action = { type: 'SET_PREF', payload }
      expect(userReducer(undefined, action)).toMatchSnapshot()
    })
  })
})