import React, { PropTypes } from 'react'
import Chance from 'chance'

const propTypes = {
  matches: PropTypes.array
}

export default class ProjectMatchContainer extends React.Component {
  constructor(props) {
    super(props)
    const chance = new Chance()
    this.state = {
      projects: [
        {
          title: 'project 1',
          description: chance.paragraph()
        },
        {
          title: 'project 2',
          description: chance.paragraph()
        },
        {
          title: 'project 3',
          description: chance.paragraph()
        },
        {
          title: 'project 4',
          description: chance.paragraph()
        }
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <a className="btn" href="/app/match"> Find More Matches </a>
        </div>
        <div className="row">
          {this.state.projects.map(val => (
            <div className="col s3">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{val.title}</span>
                  <p> {val.description} </p>
                  <a> Interested </a>
                  <a> Not Interested</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

ProjectMatchContainer.propTypes = propTypes
