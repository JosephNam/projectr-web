import React from 'react'
import { Router, Route } from 'react-router'
import { LoginContainer } from './user/LoginContainer'
import { RegisterContainer } from './user/RegisterContainer'
import { CreateProject } from './project/CreateProject'

const routes = (
  <Router>
    <Route path="/app">
      <Route path="login" component={LoginContainer} />
      <Route path="signup" component={RegisterContainer} />
      <Route path="createProject" component={CreateProject} />
    </Route>
  </Router>
)

export default routes
