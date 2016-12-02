/* global document: true */
/* global $: true */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { tryCreateProject, fetchTags } from '../ducks/project'
import { TagSearchComponent } from '../dashboard/components/UserTags'

const propTypes = {
  tryCreateProject: PropTypes.func,
  tags: PropTypes.array
}

class CreateProject extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.state = {
      project_name: '',
      project_description: ''
    }
  }
  
  componentDidMount() {
    this.state = this.state
    console.log(this.props)
  }

  handleInputChange(event) {
    this.state[`${event.target.id}`] = event.target.value
    console.log(this.state)
  }

  handleRegisterSubmit() {
    this.props.tryCreateProject(this.state)
  }

  render() {
    return (
      <div className="valign-wrapper" style={{width: '100%', height: '100%', position: 'absolute'}}>
        <div className="valign" style={{width: '100%'}}>
          <div className="container">
            <div className="row">
              <Link to="/app/dashboard" className="btn"> Back </Link>
            </div>
            <div className="row">
              <div className="col s12 m6 offset-m3">
                <div>
                  <div className="card-content">
                    <div className="row center">
                      <p>
                        Create a project
                      </p>
                    </div>
                    <htmlForm>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handleInputChange} placeholder="Project Name" id="project_name" type="text" className="center input-primary" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea onChange={this.handleInputChange} placeholder="Project Description" id="project_description" type="text" className="center input-primary materialize-textarea" />
                          <label htmlFor="project_description">Project Description</label>
                        </div>
                      </div>
                    </htmlForm>
                  </div>
                  <div>
                    <div className="center">
                        <button className="btn teal" onClick={this.handleRegisterSubmit}>Create</button>
                    </div>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    tags: state.get('project').get('tags')
  }
)

const mapDispatchToProps = dispatch => ({
  tryCreateProject(p) {
    dispatch(tryCreateProject(p))
  }
})

CreateProject.propTypes = propTypes

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject)
