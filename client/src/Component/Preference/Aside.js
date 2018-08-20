import React from 'react'
import styled from 'styled-components'
import {
  Menu,
  Icon
} from 'semantic-ui-react'
import './Aside.css'

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  cursor: pointer;
`

const Aside = () => (
  <aside>
    <Menu vertical style={{ width: '100%' }}>
      <Menu.Item>
        <ItemWrapper>
          <Icon name='user circle' />
          <p>Edit Profile</p>
        </ItemWrapper>
      </Menu.Item>
      <Menu.Item>
        <ItemWrapper>
          <Icon name='file text' />
          <p>Preferences</p>
        </ItemWrapper>
      </Menu.Item>
      <Menu.Item>
        <ItemWrapper>
          <Icon name='lock' />
          <p>Password</p>
        </ItemWrapper>
      </Menu.Item>
      <Menu.Item>
        <ItemWrapper>
          <Icon name='table' />
          <p>Connected Accounts</p>
        </ItemWrapper>
      </Menu.Item>
      <div className='line' />
      <Menu.Item>
        <ItemWrapper>
          <Icon name='clipboard list' />
          <p>Orders</p>
        </ItemWrapper>
      </Menu.Item>
      <Menu.Item>
        <ItemWrapper>
          <Icon name='credit card' />
          <p>Payment</p>
        </ItemWrapper>
      </Menu.Item>
      <Menu.Item>
        <ItemWrapper>
          <Icon name='truck' />
          <p>Shipping</p>
        </ItemWrapper>
      </Menu.Item>
      <div className='line' />
      <Menu.Item>
        <ItemWrapper>
          <Icon name='dollar sign' />
          <p>Credits & Referrals</p>
        </ItemWrapper>
      </Menu.Item>
    </Menu>
  </aside>
)

export default Aside
