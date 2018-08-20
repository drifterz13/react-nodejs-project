import React, { PureComponent } from 'react'
import { Menu, Form } from 'semantic-ui-react'

class Privacy extends PureComponent {
  state = {
    profileType: 'all',
    messageType: 'follow'
  }

  componentDidUpdate() {
    const { profileType, messageType } = this.props
    this.setState({ profileType, messageType })
  }

  handleChange = (e, { value, name }) => {
    this.setState({ ...this.state, [name]: value })
    this.props.handlePref(name, value)
  }

  render() {
    const { profileType, messageType } = this.state
    return (
      <Menu.Item>
        <div className='item-wrap'>
          <div className='item-name'>
            <h4>Privacy</h4>
          </div>
          <div className='item-option'>
            <Form>
              <div>
                <label className='label-title'>Profile visibility</label>
                <p className='helper-text'>
                  Manage who can see your activity, things you fancy, your followers, people you follow or in anyone's search result.
                  </p>
                <Form.Group inline>
                  <Form.Radio
                    label='Everyone'
                    name='profileType'
                    value='all'
                    checked={profileType === 'all'}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label='Privacy'
                    name='profileType'
                    value='me'
                    checked={profileType === 'me'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </div>

              <div style={{ marginTop: '1.4rem' }}>
                <label className='label-title'>Messages</label>
                <p className='helper-text'>
                  Control who send you messages
                </p>
                <Form.Group inline>
                  <Form.Radio
                    label='Everyone'
                    name='messageType'
                    value='all'
                    checked={messageType === 'all'}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label='People you followed'
                    name='messageType'
                    value='follow'
                    checked={messageType === 'follow'}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label='No one'
                    name='messageType'
                    value='none'
                    checked={messageType === 'none'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </div>
            </Form>
          </div>
        </div>
      </Menu.Item>
    )
  }
}

export default Privacy
