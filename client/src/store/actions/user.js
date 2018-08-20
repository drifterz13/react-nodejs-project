import axios from 'axios'
import { LOGGED_IN, SET_PREF } from '../reducers/user'

export const loggedIn = user => {
  return {
    type: LOGGED_IN,
    payload: user
  }
}

export const settingPref = data => {
  return {
    type: SET_PREF,
    payload: data
  }
}

export const register = credentials => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/auth/signup', credentials)
    console.log(data)
    localStorage.setItem('token', data.token)
    return dispatch(loggedIn(data))
  } catch (err) {
    return Promise.reject(err.response.data.error)
  }
}

export const login = credentials => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/auth/signin', credentials)
    localStorage.setItem('token', data.token)
    return dispatch(loggedIn(data))
  } catch (err) {
    return Promise.reject(err.response.data.error)
  }
}

export const setPreferences = (preferences, id) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`http://localhost:5000/auth/${id}/pref`, preferences)
      console.log(data)
      dispatch(settingPref(data))
    } catch (err) {
      return Promise.reject(err.response)
    }
  }
}
