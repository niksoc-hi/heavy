import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import './sidenav.styles.scss'

const { Header, Content, Footer, Sider } = Layout

const pages = [
  { type: 'user', name: 'Home' },
  { type: 'video-camera', name: 'Users' },
  { type: 'upload', name: 'Notes' },
  { type: 'bar-chart', name: 'Notifications' },
]

class SideNav extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['4']}
              className="menu"
            >
              {pages.map(({ type, name }) => (
                <Menu.Item key={name} className="menu-item">
                  <Icon type={type} />
                  <span>{name}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    )
  }
}

export default SideNav
