import React from 'react'
import Griddle from 'griddle-react'

const ActiveProjects = [
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
  },
  {
    ProjectName: 'Random project B',
    Members: '3/7',
    Completion: '20%'
  },
  {
    ProjectName: 'Random project C',
    Members: '3/7',
    Completion: '20%'
  },
  {
    ProjectName: 'Random project D',
    Members: '3/7',
    Completion: '20%'
  }
]

class UserProjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {ActiveProjects.map((proj, i) => {
            return <ProjectCard {...proj} key={i}> </ProjectCard>
        })}
      </div>
    )
  }
}

class ProjectCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {};
    }
    
    onClick() {
        console.log(this.props.ProjectName)
    }
    
    render() {
        return (
            <div className="col s6">
              <div className="card project-card" onClick={this.onClick.bind(this)}>
                <div className="card-content">
                  <span className="card-title inline">
                      <a>{this.props.ProjectName}</a>
                  </span>
                  <p>Placeholder description</p>
                </div>
              </div>
            </div>
        )
    }
}


export default UserProjects


