/* global document: true */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import LoginContainer from './user/LoginContainer'
import CreateProject from './project/CreateProject'
import RegisterContainer from './user/RegisterContainer'
import DashboardContainer from './dashboard/DashboardContainer'
import ProjectMatchContainer from './match/ProjectMatchContainer'
import MessageContainer from './userPages/messageCenterContainer'
import WelcomePage from './userPages/welcomeScreen'
import UserProjectsContainer from './userPages/userProjects'

import store from './Store'

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS()
  }
})

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/app">
        <Route path="login" component={LoginContainer} />
        <Route path="welcome" component={WelcomePage} />
        <Route path="message" component={MessageContainer} />
        <Route path="signup" component={RegisterContainer} />
        <Route path="createProject" component={CreateProject} />
        <Route path="userProjects" component={UserProjectsContainer} />
        <Route path="dashboard" component={DashboardContainer} />
        <Route path="match" component={ProjectMatchContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('content'))
