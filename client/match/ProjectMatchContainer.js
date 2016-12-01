import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import Griddle from 'griddle-react'

const propTypes = {
  matches: PropTypes.array
}

export default class ProjectMatchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      matches: [],
    }
  }
  
  componentDidMount() {
    const headers = new Headers()
    headers.append('Projectr-Token', sessionStorage.getItem('projectrToken'))
    fetch('http://localhost:1337/api/projectmatches', {headers})
      .then(response => response.json())
      .then(json => {
          const matches = json.result.project_matches;
          this.setState({
              matches
          })
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="dashboard-container container">
        <nav>
          <div className="nav-wrapper teal">
            <a href="./welcome" className="brand-logo center">Projectr</a>
            <ul className="left hide-on-med-and-down">
              <li className="active"><a href="./match">Project Finder</a></li>
              <li><Link to="/app/dashboard">Dashboard</Link></li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li><a href="./login">Sign Out</a></li>
            </ul>
          </div>
        </nav>
        
        <br />
        <h3>Matches found : {this.state.matches.length}</h3>
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
    this.state = {
      requestMessage: '',
      sentRequest: false,
    };
  }
  
  onInputChange(e) {
      this.requestMessage = e.target.value.trim();
  }
  
  render() {
    return (
      <div className="col s6">
       <div className="card">
          <div className="card-content">
            <span className="card-title inline">
                <a>{this.props.project_name}</a>
            </span>
            <div>
              <br/>
              <p>{this.props.project_description}</p>
            </div>
            <br />
            <div className="row">
                {this.props.matching_tags.map((t, i) => <Tag {...t} key={i}></Tag>)}
            </div>
          </div>
          <div className='card-action'>
            
            <div className="row">
                <div className='col 12'>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id={'p' + this.props.project_id} className="materialize-textarea input-primary" onChange={this.onInputChange.bind(this)}></textarea>
                      <label htmlFor={'p' + this.props.project_id}>{`Add a message for ${this.props.owner_username} in your request to join.`}</label>
                      <button type='button' className='btn' disabled={this.state.sentRequest}>Send!</button>
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

export class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }  
  
  render() {
    return (
      <div className="col s2" style={{marginRight: '20px'}}>
        <div className='chip tag-chip' title={this.props.tag_name}>
            {this.props.tag_name}
        </div>
      </div>
    )
  }
}


ProjectMatchContainer.propTypes = propTypes
