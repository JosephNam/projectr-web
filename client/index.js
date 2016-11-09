/* global document: true */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route } from 'react-router'

import LoginContainer from './user/LoginContainer'
import CreateProject from './project/CreateProject'
import RegisterContainer from './user/RegisterContainer'
import DashboardContainer from './dashboard/DashboardContainer'
import ProjectMatchContainer from './match/ProjectMatchContainer'
import App from './App'
import store, { history } from './Store'


const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/app" component={App}>
        <IndexRoute component={LoginContainer} />
        <Route path="login" component={LoginContainer} />
        <Route path="signup" component={RegisterContainer} />
        <Route path="createProject" component={CreateProject} />
        <Route path="dashboard" component={DashboardContainer} />
        <Route path="match" component={ProjectMatchContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('content'))
