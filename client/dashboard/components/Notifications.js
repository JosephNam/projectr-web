import React from 'react'
import Griddle from 'griddle-react'

const Notifications = [
  {
    ProjectName: 'Millennium Falcon',
    Members: '8/10',
    Completion: '87%'
  },
  {
    ProjectName: 'Park Benches',
    Members: '6/6',
    Completion: '100%'
  },
  {
    ProjectName: 'ALS Fundraiser',
    Members: '50/75',
    Completion: '50%'
  },
  {
    ProjectName: 'Projectr',
    Members: '4/4',
    Completion: '60%'
  },
  {
    ProjectName: 'Random project',
    Members: '3/7',
    Completion: '20%'
  }
]
class UserNotifications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ul className="collection">
        {Notifications.map((notif, i) => {
          return <Notification {...notif} key={i}></Notification>
        })}
      </ul>
      // {
      //   // <Griddle
      // //   results={Notifications}
      // //   showSettings={1}
      // //   showFilter={1}
      // //   showTableHeading={0}
      // // />
      // }
      
    )
  }
}

class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  
  render() {
    return <a href='#' className="collection-item notification">{this.props.ProjectName}</a>  
  }
}


export default UserNotifications
