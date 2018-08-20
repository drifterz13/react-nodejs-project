export const LOGGED_IN = 'LOGGED_IN'
export const SET_PREF = 'SET_PREF'

const initialState = {
  info: {},
  authenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        authenticated: true,
        info: { ...action.payload }
      }
    case SET_PREF:
      return {
        ...state,
        info: { ...state.info, preferences: action.payload }
      }
    default:
      return state
  }
}
