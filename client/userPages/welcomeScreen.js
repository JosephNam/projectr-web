import React from 'react'
import { Link } from 'react-router'


class WelcomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="center-align">
          <h5 className="center-algin" fontSize="30">Welcome to Projectr</h5>
        </div>
        <div className="row">
          <div className="center-align">
            <a className="btn" href="./login"> Sign in </a>
            <a className="btn" href="./signup"> Sign up </a>
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomePage
