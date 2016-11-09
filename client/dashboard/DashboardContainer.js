import React from 'react'
import { Link } from 'react-router'

import UserRating from './components/userRating'
import ProfilePic from './components/ProfilePic'
import UserProjects from './components/ActiveProjects'
import UserNotifications from './components/Notifications'

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <a href="./welcome" className="brand-logo center">Projectr</a>
            <ul className="left hide-on-med-and-down">
              <li><a href="./match">Project Finder</a></li>
              <li><a href="./userProjects">My Projects</a></li>
              <li className="active"><a href="./dashboard">Dashboard</a></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a href="./message">Messages<span className="new badge">4</span></a></li>
              <li><a href="./dashboard">View My Profile</a></li>
              <li><a href="./login">Sign Out</a></li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col s4">
            <div className="card-panel">
              <ul>
                <li>
                  <h4> User Name </h4>
                  <ProfilePic />
                </li>
                <li>
                  <UserRating />
                </li>
                <li>
                  <div className="card-action">
                    <div className="left-align">
                      <Link className="btn" to="/app/dashboard"> Start New Project </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col s4">
            <ul>
              <li>
                <div className="center-align">
                  <h4> Projects </h4>
                </div>
                <UserProjects />
              </li>
            </ul>
          </div>
          <div className="col s4">
            <ul>
              <li>
                <div className="right-align">
                  <h4> Notifications </h4>
                </div>
                <UserNotifications />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardComponent
