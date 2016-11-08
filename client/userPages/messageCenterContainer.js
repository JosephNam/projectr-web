import React from 'react'
import Griddle from 'griddle-react'


const Notifications = [
  {
    Notification: 'Project Invitation: Sallys Project',
    When: '2 hours ago'
  },
  {
    Notification: 'Direct Message from Chris',
    When: '3 hours ago'
  },
  {
    Notification: 'Direct Message from Kyle',
    When: '2 days ago'
  }
]
class MessageContainer extends React.Component {
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
              <li><a href="./dashboard">My Projects</a></li>
              <li><a href="./dashboard">Dashboard</a></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a href="./message" className="active">Messages<span className="new badge">4</span></a></li>
              <li><a href="./dashboard">View My Profile</a></li>
              <li><a href="./login">Sign Out</a></li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <Griddle
            results={Notifications}
            showSettings={1}
            showFilter={1}
            showTableHeading={0}
          />
        </div>
      </div>
    )
  }
}

export default MessageContainer
