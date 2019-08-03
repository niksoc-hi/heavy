import React, { Component } from 'react'
import { Layout, Menu, Icon, Drawer } from 'antd'
import './sidenav.styles.scss'
import { navigateToUrl } from '../../utils/navigationUtils'

const { Header, Content, Footer, Sider } = Layout

const pages = [
  { type: 'home', name: 'Home', key: 'home' },
  { type: 'user', name: 'Users', key: 'users' },
  { type: 'book', name: 'Notes', key: 'notes' },
  { type: 'bell', name: 'Notifications', key: 'notifications' },
]

const SideNav = props => {
  const [tab, setTab] = React.useState('')
  const handleNavigation = item => {
    setTab(item.key)
    navigateToUrl(`/${item.key}`)
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={true}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onSelect={handleNavigation}
        >
          {pages.map(({ type, name, key }) => (
            <Menu.Item key={name} className="menu-item">
              <Icon type={type} />
              <span>{name}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div className="tab-name">{tab}</div>
        </Header>
        <Content
          style={{
            padding: 24,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default SideNav
