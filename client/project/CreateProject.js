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
      <div className="container">
        <div className="row">
          <Link className="btn" to="/app/dashboard"> Back To Dashboard </Link>
        </div>
        <div className="row">
          <htmlForm className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.handleInputChange} placeholder="Project Name" id="project_name" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                {/*this.props.tags.map((tag, i) => (
                  <div>
                    <input id={tag.tag_id} value={this.state.tag_id} type="checkbox" onChange={this.handleInputChange} key={i} />
                    <label htmlFor={tag.tag_name}> {tag.tag_name} </label>
                  </div>
                ))*/}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textArea className="materialize-textarea" onChange={this.handleInputChange} placeholder="Project Description" id="project_description" type="password" />
              </div>
            </div>
          </htmlForm>
        </div>
        <div className="row">
          <button className="btn" onClick={this.handleRegisterSubmit}>Create Project</button>
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
