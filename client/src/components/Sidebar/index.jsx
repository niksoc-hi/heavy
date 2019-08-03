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

class SideNav extends Component {
  handleNavigation = item => {
    navigateToUrl(`/${item.key}`)
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={true}
          style={{
            overflow: 'auto',
            height: '100vh',
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {pages.map(({ type, name }) => (
              <Menu.Item key={name} className="menu-item">
                <Icon type={type} />
                <span>{name}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content
            style={{
              padding: 24,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default SideNav

// const Sidebar = () => {
//   return (
//     <Drawer
//       title="Basic Drawer"
//       placement={'left'}
//       closable={false}
//       visible={true}
//     >
//       <p>Some contents...</p>
//       <p>Some contents...</p>
//       <p>Some contents...</p>
//     </Drawer>
//   )
// }

// export default Sidebar
