import React, { PropTypes } from 'react'
import UserInfo from './components/UserInfo'

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div> 
        <p> Hello World </p>
        <UserInfo />
      </div>
    )
  }
}

export default DashboardComponent
