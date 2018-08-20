import React, { PureComponent, Fragment } from 'react'
import { Menu, Form } from 'semantic-ui-react'

class Localize extends PureComponent {
  state = {
    language: 'EN',
    timezone: '-12.0',
    currency: 'USD'
  }

  componentDidUpdate() {
    const { language, timezone, currency } = this.props
    this.setState({ language, timezone, currency })
  }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
    this.props.handlePref(e.target.name, e.target.value)
  }

  render() {
    const { language, timezone, currency } = this.state
    return (
      <Fragment>
        <div className='main-line' />
        <Menu.Item>
          <div className='item-wrap'>
            <div className='item-name'>
              <h4>Localization</h4>
            </div>
            <div className='item-option'>
              <Form>
                <Form.Group grouped>
                  <label className='label-title'>Language</label>
                  <Form.Field
                    control='select'
                    name='language'
                    value={language}
                    onChange={this.handleChange}
                  >
                    <option value='EN'>English</option>
                    <option value='ET'>Estonian</option>
                    <option value='FJ'>Fiji</option>
                    <option value='FI'>Finnish</option>
                    <option value='FR'>French</option>
                    <option value='KA'>Georgian</option>
                    <option value='DE'>German</option>
                    <option value='EL'>Greek</option>
                    <option value='GU'>Gujarati</option>
                    <option value='HE'>Hebrew</option>
                  </Form.Field>
                </Form.Group>
                <p className='helper-text'>Interested in helping translate Fancy? <a>Let us Know.</a></p>
                <Form.Group grouped>
                  <label className='label-title'>Time zone</label>
                  <Form.Field
                    control='select'
                    name='timezone'
                    value={timezone}
                    onChange={this.handleChange}
                  >
                    <option value='-12.0'>(GMT -12:00) Eniwetok, Kwajalein</option>
                    <option value='-11.0'>(GMT -11:00) Midway Island, Samoa</option>
                    <option value='-10.0'>(GMT -10:00) Hawaii</option>
                    <option value='-9.0'>(GMT -9:00) Alaska</option>
                    <option value='-8.0'>(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                    <option value='-7.0'>(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                    <option value='-6.0'>(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                    <option value='-5.0'>(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                    <option value='-4.0'>(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                    <option value='-3.5'>(GMT -3:30) Newfoundland</option>
                  </Form.Field>
                </Form.Group>
                <Form.Group grouped>
                  <label className='label-title'>Currency</label>
                  <Form.Field
                    control='select'
                    name='currency'
                    onChange={this.handleChange}
                    value={currency}
                  >
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBP'>GBP</option>
                    <option value='DZD'>DZD</option>
                    <option value='ARP'>ARP</option>
                    <option value='AUD'>AUD</option>
                    <option value='ATS'>ATS</option>
                    <option value='BSD'>BSD</option>
                    <option value='BBD'>BBD</option>
                    <option value='BEF'>BEF</option>
                  </Form.Field>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Menu.Item>
        <div className='main-line' />
      </Fragment>
    )
  }
}

export default Localize