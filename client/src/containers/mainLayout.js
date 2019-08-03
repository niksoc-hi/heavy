import * as React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

import RoutesManager from '../routes/routesManager'

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

  componentDidMount() {}

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
        </Sidebar>
      </div>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout)
