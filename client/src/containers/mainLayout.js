import * as React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'
import SideNav from './sidenav'

import RoutesManager from '../routes/routesManager'

// import _ from '../utils/lodashUtils';
// import './mainLayout.styles.scss';

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
        <SideNav>
          <div className="page-content-wrapper">
            <Switch>{routesManager.getRoutes()}</Switch>
          </div>
        </SideNav>
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
