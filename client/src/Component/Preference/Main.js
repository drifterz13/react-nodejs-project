import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setPreferences } from '../../store/actions/user'
import { Menu, Button, Container, Message, Icon } from 'semantic-ui-react'
import Aside from './Aside'
import Localize from './Localize'
import Privacy from './Privacy'
import Content from './Content'
import './Main.css'

class Main extends Component {
  state = {
    preferences: {
      language: 'EN',
      timezone: '-12.0',
      currency: 'USD',
      profileType: 'all',
      messageType: 'follow',
      categoryType: 'enable'
    },
    loading: false
  }

  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push('/login')
    }
    const { preferences } = this.props.user
    if (preferences && Object.keys(preferences).length > 0) {
      this.setState({ preferences })
    }
  }

  handlePref = (name, value) => {
    this.setState({
      ...this.state,
      preferences: { ...this.state.preferences, [name]: value }
    })
  }

  hanldeSubmit = () => {
    this.setState({ ...this.state, loading: true })
    const { _id } = this.props.user
    this.props.setPreferences(this.state.preferences, _id)
      .then(() => this.setState({ ...this.state, loading: false }))
  }

  render() {
    const {
      language,
      timezone,
      currency,
      profileType,
      messageType,
      categoryType
    } = this.state.preferences
    return (
      <Fragment>
        {this.state.loading && (
          <Message icon style={{ margin: '1rem auto', width: '45%' }}>
            <Icon name='circle notched' loading />
            <Message.Content>
              <Message.Header>Just one second</Message.Header>
              We are saving new preferences for you.
            </Message.Content>
          </Message>
        )}
        <Container>
          <Aside />
          <article>
            <Menu vertical>
              <Menu.Item>
                <h3>Edit Preferenced</h3>
              </Menu.Item>
              <Localize
                language={language}
                timezone={timezone}
                currency={currency}
                handlePref={this.handlePref}
              />
              <Privacy
                profileType={profileType}
                messageType={messageType}
                handlePref={this.handlePref}
              />
              <Content categoryType={categoryType} handlePref={this.handlePref} />
              <Menu.Item>
                <div className='save-btn-wrap'>
                  <Button onClick={this.hanldeSubmit}>Save Preferences</Button>
                </div>
              </Menu.Item>
            </Menu>
          </article>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.info
  }
}

export default connect(mapStateToProps, { setPreferences })(Main)
