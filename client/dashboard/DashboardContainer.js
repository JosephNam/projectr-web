import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import UserRating from './components/userRating'
import ProfilePic from './components/ProfilePic'
import UserProjects from './components/ActiveProjects'
import UserNotifications from './components/Notifications'
import ProjectrNav from './components/ProjectrNav'
import ProjectView from './components/ProjectView'
import { fetchInfo } from '../ducks/user'


const propTypes = {
  projects: PropTypes.array,
  username: PropTypes.string,
  fetchInfo: PropTypes.func
}

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProject: undefined
    }
    this.selectProject = this.selectProject.bind(this)
    this.back = this.back.bind(this)
    console.log('props are', props)
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.username === undefined) {
        console.log('hello')
        this.props.fetchInfo()
      }
    }, 2000)
  }

  selectProject(project) {
    this.setState({
      selectedProject: project
    })
  }

  back() {
    this.setState({
      selectedProject: undefined
    })
  }

  render() {
    let projectView
    if (this.state.selectedProject === undefined) {
      projectView = <UserProjects projects={this.props.projects} select={this.selectProject} />
    } else {
      projectView = <ProjectView project={this.state.selectedProject} back={this.back} />
    }
    return (
      <div className="container dashboard-container">
        <ProjectrNav />
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col s2 user-panel">
            <div className='responsive-fixed'>
              <div className="card-panel indigo lighten-5 center">
                <ul>
                  <li>
                    <h4> {this.props.username} </h4>
                    <ProfilePic />
                  </li>
                  <li>
                    <UserRating />
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col s12">
                  <Link className="btn" to="/app/createProject" style={{ width: '100%' }}> New </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col s8 responsive-margin">
            {projectView}
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

DashboardComponent.propTypes = propTypes

const mapStateToProps = state => (
  {
    username: state.get('user').get('username'),
    projects: state.get('user').get('projects')
  }
)

const mapDispatchToProps = dispatch => ({
  fetchInfo: dispatch(fetchInfo())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent)

