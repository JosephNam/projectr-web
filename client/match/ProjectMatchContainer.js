import React, { PropTypes } from 'react'
import {Link} from 'react-router';
import Griddle from 'griddle-react'

const propTypes = {
  matches: PropTypes.array
}

const columnMeta = [
  {
    columnName: 'Id',
    order: 0,
    locked: false,
    visible: true
  },
  {
    columnName: 'ProjectName',
    order: 1
  },
  {
    columnName: 'Members',
    order: 2
  },
  {
    columnName: 'Completion',
    order: 3
  },
  {
    columnName: 'Joinable',
    order: 4
  }
]
const projectsMeta = [
  {
    Id: 0,
    ProjectName: 'Millennium Falcon',
    Members: '10/10',
    Completion: '87%',
    Joinable: 'No'
  },
  {
    Id: 1,
    ProjectName: 'Park Benches',
    Members: '6/6',
    Completion: '100%',
    Joinable: 'No'
  },
  {
    Id: 2,
    ProjectName: 'ALS Fundraiser',
    Members: '50/75',
    Completion: '50%',
    Joinable: <a href="./projects/2">Yes</a>
  },
  {
    Id: 3,
    ProjectName: 'Projectr',
    Members: '4/4',
    Completion: '60%',
    Joinable: 'No'
  },
  {
    Id: 4,
    ProjectName: 'Random project',
    Members: '3/7',
    Completion: '20%',
    Joinable: <a href="./projects/4">Yes</a>
  }
]

const matches = [
   {
     name: 'Project 1',
     tags: [
       {
         name: 'express.js'
       },
       {
         name: 'node.js'
       }
     ]
   }
]

export default class ProjectMatchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      matches
    }
  }
  
  render() {
    return (
      <div className="container">
        <nav>
          <div className="nav-wrapper teal">
            <a href="./welcome" className="brand-logo center">Projectr</a>
            <ul className="left hide-on-med-and-down">
              <li className="active"><a href="./match">Project Finder</a></li>
              <li><Link to="/app/dashboard">Dashboard</Link></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a href="./message">Messages<span className="new badge">4</span></a></li>
              <li><a href="./dashboard">View My Profile</a></li>
              <li><a href="./login">Sign Out</a></li>
            </ul>
          </div>
        </nav>
        
        <br />
        
        <div className='row'>
            {
              this.state.matches.map((m, i) => {
                return <ProjectMatchCard {...m} key={i}> </ProjectMatchCard>
              })
            }
        </div>
      </div>
    )
  }
}

export class ProjectMatchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="col s6">
       <div className="card">
          <div className="card-content">
            <span className="card-title inline">
                <a>{this.props.name}</a>
            </span>
            <div>
              <br/>
              
            </div>
          </div>
          <div className='card-action'>
            <div className="row">
                {this.props.tags.map((t, i) => <Tag {...t} key={i}></Tag>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }  
  
  render() {
    return (
      <div className="col s2">
        <div className='chip tag-chip' title={this.props.name}>
            {this.props.name}
        </div>
      </div>
    )
  }
}


ProjectMatchContainer.propTypes = propTypes
