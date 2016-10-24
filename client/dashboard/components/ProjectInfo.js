import React from 'react'

const ProjectInfo = () => (
  <div className="row">
    <div className="col s12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Test Projects</span>
          <ul>
            <li>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Test Project1</span>
                  <p> Test description lorem ipsum alskdjalksdj </p>
                  <a> Test Tags </a>
                </div>
              </div>
            </li>
            <li>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Test Project2</span>
                  <p> Test description lorem ipsum alskdjalksdj </p>
                  <a> Test Tags </a>
                </div>
              </div>
            </li>
            <li>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Test Project3</span>
                  <p> Test description lorem ipsum alskdjalksdj </p>
                  <a> Test Tags </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="card-action">
          <a className="btn" href="#">View Profile</a>
          <a className="btn" href="#">Edit Profile</a>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectInfo
