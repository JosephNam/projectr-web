import React from 'react'

class UserProjects extends React.Component {
  constructor(props) {
    super(props)
    console.log('props are', props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {this.props.projects.map((proj, i) => {
          return <ProjectCard {...proj} key={i} selectProject={this.props.select} />
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
      this.props.selectProject({
        project_name: this.props.project_name,
        project_description: this.props.project_description
      })
    }
    
    render() {
        return (
            <div className="col s6">
              <div className="card project-card" onClick={this.onClick.bind(this)}>
                <div className="card-content">
                  <span className="card-title inline">
                      <a>{this.props.project_name}</a>
                  </span>
                  <p>{this.props.project_description}</p>
                </div>
              </div>
            </div>
        )
    }
}


export default UserProjects


