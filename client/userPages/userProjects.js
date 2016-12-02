import React from 'react'
import Griddle from 'griddle-react'


const UserProjects = [
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
class UserProjectsContainer extends React.Component {
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
              <li><a href="./dashboard" className="active">My Projects</a></li>
              <li><a href="./dashboard">Dashboard</a></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a href="./login">Sign Out</a></li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <Griddle
            results={UserProjects}
            showSettings={1}
            showFilter={1}
            showTableHeading={0}
          />
        </div>
      </div>
    )
  }
}

export default UserProjectsContainer