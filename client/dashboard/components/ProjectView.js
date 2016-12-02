import React, { PropTypes } from 'react'
import {ProjectOverview} from './../../project/ProjectOverview'
import {ProjectRequests} from './../../project/ProjectRequests'
import {TagsContainer} from './UserTags'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    $('ul.tabs').tabs()
  }

  render() {
    return (
        <div className='row'>
          <div className='col s12'>
            <button className="btn" onClick={this.props.back}> Back </button>
          </div>
          <div className='col s12'>
            <h2> {this.props.project_name} </h2>
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3"><a className="active" href="#overview">Overview</a></li>
                <li className="tab col s3"><a href="#requests">Join Requests</a></li>
                <li className="tab col s3"><a href="#test4">Posts</a></li>
              </ul>
            </div>
            <div id="overview" className="col s12">
              <ProjectOverview {...this.props}></ProjectOverview>
              <TagsContainer title={`${this.props.project_name} Tags`} url={'http://localhost:1337/api/projects/' + this.props.project_id + '/tags'}></TagsContainer>
            </div>
            <div id="requests" className="col s12">
              <ProjectRequests {...this.props}></ProjectRequests>
            </div>
            <div id="test4" className="col s12">Test 4</div>
          </div>
          </div>
        </div>
      )
  }
}

export default ProjectPage
