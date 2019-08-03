import * as React from 'react'
import { Switch, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import MainLayout from '../containers/mainLayout'

export const history = createBrowserHistory()
const Routes = props => {
  return (
    <Router history={history}>
      <Switch>
        <MainLayout history={props.history} />
      </Switch>
    </Router>
  )
}

export default Routes
