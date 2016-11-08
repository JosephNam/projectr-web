import React from 'react'
import { Router, Route } from 'react-router'
import { LoginContainer } from './user/LoginContainer'
import { RegisterContainer } from './user/RegisterContainer'
import { CreateProject } from './project/CreateProject'
import { DashboardContainer } from './dashboard/DashboardContainer'
import { ProjectMatchContainer } from './match/ProjectMatchContainer'
import { MessageContainer } from './userPages/messageCenterContainer'
import { WelcomePage } from './userPages/welcomeScreen'
import { UserProjectsContainer } from './userPages/userProjects'

const routes = (
  <Router>
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
)

export default routes
