import React from 'react'
import { Router, Route } from 'react-router'
import { LoginContainer } from './user/LoginContainer'
import { RegisterContainer } from './user/RegisterContainer'
import { CreateProject } from './project/CreateProject'
import { DashboardContainer } from './dashboard/DashboardContainer'
import { ProjectMatchContainer } from './match/ProjectMatchContainer'

const routes = (
  <Router>
    <Route path="/app">
      <Route path="login" component={LoginContainer} />
      <Route path="signup" component={RegisterContainer} />
      <Route path="createProject" component={CreateProject} />
      <Route path="dashboard" component={DashboardContainer} />
      <Route path="match" component={ProjectMatchContainer} />
    </Route>
  </Router>
)

export default routes
