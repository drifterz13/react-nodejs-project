import React, { Fragment } from 'react'
import Navigation from './Header/Navigation'
import { Route, Switch, withRouter } from 'react-router-dom'
import LoginForm from './Auth/LoginForm'
import SignupForm from './Auth/SignupForm'
import Main from './Preference/Main'

import './App.css'

const App = (props) => (
  <Fragment>
    <Navigation />
    <div className='main-app'>
      <Switch>
        <Route exact path='/' render={() => <SignupForm {...props} />} />
        <Route exac path='/login' render={() => <LoginForm {...props} />} />
        <Route exact path='/setting' render={() => <Main {...props} />} />
      </Switch>
    </div>
  </Fragment>
)

export default withRouter(App)
