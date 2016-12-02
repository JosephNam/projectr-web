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
      sessionStorage.setItem('currentProject', this.props.project_id)
      console.log(this.props)
      this.props.selectProject({
        project_name: this.props.project_name,
        project_description: this.props.project_description,
        project_id: this.props.project_id
      })
    }
    
    render() {
        return (
            <div className="col s6">
              <div className="card project-card" onClick={this.onClick.bind(this)} style={{height: '100%'}}>
                <div className="card-content">
                  <span className="card-title inline">
                      <a>{this.props.project_name}</a>
                  </span>
                  <p className='description'>{this.props.project_description}</p>
                </div>
              </div>
            </div>
        )
    }
}


export default UserProjects


