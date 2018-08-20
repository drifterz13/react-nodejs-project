import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'

const configureStore = () => {
  const store = createStore(
    userReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  return store
}

export default configureStore