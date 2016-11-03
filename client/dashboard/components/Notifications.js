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
class UserNotifications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Griddle
        results={Notifications}
        showSettings={1}
        showFilter={1}
        showTableHeading={0}
      />
    )
  }
}
export default UserNotifications
