import React, { PropTypes } from 'react'

const ProjectPage = (props) => {
  console.log(props)
  return(
  <div>
    <h1> {props.project.project_name} </h1>
    <p> {props.project.project_description} </p>
    <button className="btn" onClick={props.back}> Back </button>
  </div>
)}

export default ProjectPage
