/* global document: true */
/* global $: true */

import React, { PropTypes } from 'react'

const propTypes = {
  tryCreateProject: PropTypes.function
}

class CreateProject extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
    this.state = {
      projectName: ''
    }
  }

  componentDidMount() {
    this.state = this.state
    $(document).ready(() => $('select').material_select())
  }

  handleInputChange(event) {
    this.state[`${event.target.id}`] = event.target.value
  }

  handleSubmission() {
    this.props.tryCreateProject(this.state)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <htmlForm className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.handleInputChange} placeholder="Project Name" id="projectName" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <select multiple placeholder="Tags">
                  <option value="tag1">
                    Tag 1
                  </option>
                  <option value="tag2">
                    Tag 2
                  </option>
                  <option value="tag3">
                    Tag 3
                  </option>
                  <option value="tag4">
                    Tag 4
                  </option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textArea className="materialize-textarea" onChange={this.handleInputChange} placeholder="Project Description" id="textArea" type="password" />
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

CreateProject.propTypes = propTypes

export default CreateProject
