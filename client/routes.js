import React from 'react'
import { Router, Route } from 'react-router'
import { LoginContainer } from './user/LoginContainer'
import { RegisterContainer } from './user/RegisterContainer'

const routes = (
  <Router>
    <Route path="/app">
      <Route path="login" component={LoginContainer} />
      <Route path="signup" component={RegisterContainer} />
    </Route>
  </Router>
)

export default routes
