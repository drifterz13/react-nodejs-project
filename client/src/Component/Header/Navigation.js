import React from 'react'
import { Container, Menu, Input, Icon, Header } from 'semantic-ui-react'
import './Navigation.css'

const Navigation = () => (
  <Menu fixed='top' borderless>
    <Container>
      <Menu.Menu position='left'>
        <Menu.Item>
          <Input iconPosition='left' icon='search' placeholder='Search Fancy' />
        </Menu.Item>
      </Menu.Menu>
      <Menu.Item header>
        <Header as='h2'>FANCY</Header>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Icon name='shopping cart' />
        </Menu.Item>
        <Menu.Item>
          <Icon name='inbox' />
        </Menu.Item>
        <Menu.Item>
          <Icon name='bolt' />
        </Menu.Item>
        <Menu.Item>
          <Icon name='user' />
          <p className='content' style={{ margin: '0px' }}>
            You
          </p>
          <Icon
            name='caret down'
            style={{ border: 'none', alignSelf: 'flex-start' }}
          />
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default Navigation
