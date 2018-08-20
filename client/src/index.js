import React from 'react'
import ReactDOM from 'react-dom'
import App from './Component/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode'
import configureStore from './store'
import { login } from './store/actions/user'
import 'semantic-ui-css/semantic.min.css'

const store = configureStore()

if (localStorage.getItem('token')) {
  const decoded = jwtDecode(localStorage.token)
  store.dispatch(login(decoded))
}

window.onbeforeunload = () => {
  localStorage.removeItem('token')
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root'))
  