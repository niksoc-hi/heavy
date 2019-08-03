import * as React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ActivityIndicator from '../components/activityIndicator/activityIndicator'
import RoutesManager from '../routes/routesManager'
import { withCookies, Cookies } from 'react-cookie'
import { getCurrentUser } from '../actions/userActions'

import './mainLayout.styles.scss'
import { Spin } from 'antd'

class MainLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidMount() {
    const { cookies, getCurrentUser } = this.props
    cookies.set(
      'csrftoken',
      'iaSM2ickFD0CJI4qtf8gGjIZ8p05FJoYauPJvGup5znfq42BiVKqYVXMmqcjVJtI'
    )
    cookies.set('sessionid', 'il2mxzucfr78jflie7qhu7whmrdrqo6u')
    getCurrentUser()
  }

  componentDidUpdate(prevProps) {}

  render() {
    const routesManager = RoutesManager.getInstance()
    return (
      <div className="wrapper">
        <Sidebar>
          <div className="page-content-wrapper">
            <React.Suspense fallback={<Spin size="large" />}>
              <Switch>{routesManager.getRoutes()}</Switch>
            </React.Suspense>
          </div>
          <ActivityIndicator />
        </Sidebar>
      </div>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(getCurrentUser()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withCookies(MainLayout))
