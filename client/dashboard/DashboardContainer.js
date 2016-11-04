import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import UserInfo from './components/UserInfo'
import ProjectInfo from './components/ProjectInfo'

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <p> Your Dashboard </p>
        <Link className="btn" to="/app/match"> Find me some projects </Link>
        <div className="row">
          <div className="col s6">
            <UserInfo />
            <a href="/app/createProject"> Create New Project </a>
          </div>
          <div className="col s6">
            <ProjectInfo />
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardComponent
