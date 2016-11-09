import React from 'react'
import { IndexRoute, Router, Route } from 'react-router'
import { LoginContainer } from './user/LoginContainer'
import { RegisterContainer } from './user/RegisterContainer'
import { CreateProject } from './project/CreateProject'
import { DashboardContainer } from './dashboard/DashboardContainer'
import { ProjectMatchContainer } from './match/ProjectMatchContainer'
import { history } from './Store'
import { App } from './App'

const routes = (
  <Router>
    <Route path="/app" component={App}>
      <IndexRoute component={LoginContainer} />
      <Route path="signup" component={RegisterContainer} />
      <Route path="createProject" component={CreateProject} />
      <Route path="dashboard" component={DashboardContainer} />
      <Route path="match" component={ProjectMatchContainer} />
    </Route>
  </Router>
)

export default routes
