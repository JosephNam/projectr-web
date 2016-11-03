import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Griddle from 'griddle-react'

import UserRating from './components/userRating'
import ProfilePic from './components/ProfilePic'
import ProfileInfo from './components/Profile'
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
                      <Link className="btn" to="/app/dashboard"> Send Message </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col s4">
            <ul>
              <li>
                <ProfileInfo />
              </li>
              <li>
                <div className="center-align">
                  <Link className="btn" to="/app/match"> Find New Projects </Link>
                </div>
              </li>
              <li>
                {/* Any other way to add space? */}
              </li>
              <li>
                <div className="center-align">
                  <Link className="btn" to="/app/NewProject"> Start New Project </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="col s4">
            <ul>
              <li>
                <div className="right-align">
                  <a className="waves-effect waves-light btn" href="/app/login">Sign Out</a>
                  <a className="waves-effect waves-light btn" href="">View My Profile</a>
                </div>
              </li>
              <li>
                <div className="right-align">
                  <h4> Notifications </h4>
                </div>
                <UserNotifications />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col s4">
            <h4> Projects </h4>
            <UserProjects />
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardComponent
