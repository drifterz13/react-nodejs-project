import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../store/actions/user'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SignupPage extends Component {
  state = {
    user: {
      username: '',
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  handleChange = e => this.setState({
    ...this.state,
    user: { ...this.state.user, [e.target.name]: e.target.value }
  })

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ ...this.state, loading: true })
    const errors = this.validate()
    if (Object.keys(errors).length > 0) {
      this.setState({ ...this.state, errors, loading: false })
    } else {
      this.props.register(this.state.user)
        .then(() => {
          this.setState({ ...this.state, loading: false, errors: {} })
          this.props.history.push('/setting')
        })
        .catch(err => {
          this.setState({ ...this.state, loading: false, errors: err })
        })
    }
  }

  validate = () => {
    const { username, email, password } = this.state.user
    let errors = {}
    const regexEmail = /\S+@\S+\.\S+/
    const isEmail = regexEmail.test(email)
    if (!username || username.length < 3) {
      errors.message = 'Username must longer than 3 characters.'
      return errors
    } else if (!isEmail) {
      errors.message = 'Email is not valid.'
      return errors
    } else if (!password || password.length < 3) {
      errors.message = 'Password must longer than 3 characters.'
      return errors
    }
    return errors
  }

  render() {
    const { username, email, password } = this.state.user
    const { errors, loading } = this.state
    return (
      <Grid textAlign='center' style={{ height: '100%', marginTop: '5rem' }} >
        <Grid.Column style={{ maxWidth: 450 }}>
          {Object.keys(errors).length > 0 && (
            <Message warning>
              <Message.Header>{errors.message}</Message.Header>
              <p>Please check your credentials, then try again.</p>
            </Message>
          )}
          <Form size='large' loading={loading} onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='Username'
                type='text'
                name='username'
                value={username}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              <Button color='instagram' fluid size='large'>
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have account ? <Link to='/login'>Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(null, { register })(SignupPage)
