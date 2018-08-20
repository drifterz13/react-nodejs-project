import React, { PureComponent, Fragment } from 'react'
import { Form, Menu } from 'semantic-ui-react'

class Content extends PureComponent {
  state = {
    categoryType: 'enable'
  }

  componentDidUpdate() {
    const { categoryType } = this.props
    this.setState({ categoryType })
  }

  handleChange = (e, { value }) => {
    this.props.handlePref('categoryType', value)
    this.setState({ categoryType: value })
  }

  render() {
    const { categoryType } = this.state
    return (
      <Fragment>
        <div className='main-line' />
        <Menu.Item>
          <div className='item-wrap'>
            <div className='item-name'>
              <h4>Content</h4>
            </div>
            <div className='item-option'>
              <Form>
                <div>
                  <label className='label-title'>Category lists</label>
                  <p className='helper-text'>
                    Automatically add Fancy'd items to the Category list
                </p>
                  <Form.Group inline>
                    <Form.Radio
                      label='Enable'
                      value='enable'
                      checked={categoryType === 'enable'}
                      onChange={this.handleChange}
                    />
                    <Form.Radio
                      label='Disable'
                      value='disable'
                      checked={categoryType === 'disable'}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </div>
              </Form>
            </div>
          </div>
        </Menu.Item>
        <div className='main-line' />
      </Fragment>
    )
  }
}

export default Content