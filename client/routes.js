import React from 'react'
import { Route } from 'react-router'
import Login from '../client/login/Login'
import Register from '../client/login/Register'

const routes = (
  <Route path="/app">
    <Route path="login" component={Login} />
    <Route path="signup" component={Register} />
  </Route>
)

export default routes
