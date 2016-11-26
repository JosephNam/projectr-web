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
      <div className="container dashboard-container">
        <nav>
          <div className="nav-wrapper teal">
            <a href='#' className="brand-logo center">Projectr</a>
            <ul className="left hide-on-med-and-down">
              <li><Link to="/app/match">Project Finder</Link></li>
              <li className="active"><a href="./dashboard">Dashboard</a></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a href="/message">Messages<span className="new badge">4</span></a></li>
              <li><a href="/dashboard">View My Profile</a></li>
              <li><Link to="/app/login">Sign Out</Link></li>
            </ul>
          </div>
        </nav>
        <div className="row" style={{marginTop: '20px'}}>
          <div className="col s2 user-panel">
            <div className='responsive-fixed'>
              <div className="card-panel indigo lighten-5 center">
                <ul>
                  <li>
                    <h4> User Name </h4>
                    <ProfilePic />
                  </li>
                  <li>
                    <UserRating />
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col s12">
                  <Link className="btn" to="/app/dashboard" style={{ width: '100%' }}> New </Link>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col s8 responsive-margin">
            <UserProjects />
          </div>
          <div className="col s2">
             <div className="responsive-fixed">
                <div className="card-panel center">
                <ul>
                  <li>
                    <h4>Notices</h4>
                  </li>
                  <UserNotifications />
                </ul>
              </div>
             </div>
             
          </div>
         
        </div>
      </div>
    )
  }
}

export default DashboardComponent
