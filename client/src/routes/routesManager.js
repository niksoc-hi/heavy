import React from 'react'
import Routes from './routes'
import { Route } from 'react-router-dom'
const Notes = React.lazy(() => import('../containers/notes'))
const Home = React.lazy(() => import('../containers/home/home'))
const Notifications = React.lazy(() =>
  import('../containers/notifications/notifications')
)

class RoutesManager {
  static instance
  static getInstance() {
    if (!RoutesManager.instance) {
      RoutesManager.instance = new RoutesManager()
    }
    return RoutesManager.instance
  }

  getComponentFromPath(path) {
    switch (path) {
      case Routes.home:
        return Home
      case Routes.notes:
        return Notes
      case Routes.notifications:
        return Notifications
      default:
        return Home
    }
  }

  getRoutes() {
    const routes = []
    for (const key in Routes) {
      if (Routes.hasOwnProperty(key)) {
        const route = (
          <Route
            exact={true}
            path={Routes[key]}
            component={this.getComponentFromPath(Routes[key])}
            key={key}
          />
        )
        routes.push(route)
      }
    }
    return routes
  }
}

export default RoutesManager
