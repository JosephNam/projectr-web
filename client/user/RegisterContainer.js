import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { tryRegister } from '../ducks/user'
import {Link} from 'react-router';

const propTypes = {
  register: PropTypes.function
}

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
  }

  handleInputChange(event) {
    console.log(event.target.id)
    console.log(event.target.value)
    this.state[`${event.target.id}`] = event.target.value
  }

  handleRegisterSubmit() {
    const username = this.state.username
    const password = this.state.password
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    const email = this.state.email
    this.props.register(username, password, firstName, lastName, email)
  }

  render() {
    return (
      <div className="valign-wrapper" style={{width: '100%', height: '100%', position: 'absolute'}}>
        <div className="valign" style={{width: '100%'}}>
          <div className="container">
            <div className="row">
              <div className="col s12 m6 offset-m3">
                <div>
                  <div className="card-content">
                    <div className="row center">
                      <p> Create a Projectr account. :) </p>
                    </div>
                    <htmlForm className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handleInputChange} placeholder="Username" id="username" type="text" className="validate input-primary center" />
                        </div>
                        <div className="input-field col s12">
                          <input onChange={this.handleInputChange} placeholder="Password" id="password" type="password" className="validate input-primary center" />
                        </div>
                        <div className="input-field col s6">
                          <input onChange={this.handleInputChange} placeholder="First Name" id="firstName" type="text" className="validate input-primary center" />
                        </div>
                        <div className="input-field col s6">
                          <input onChange={this.handleInputChange} placeholder="Last Name" id="lastName" type="text" className="validate input-primary center" />
                        </div>
                        <div className="input-field col s12">
                          <input onChange={this.handleInputChange} placeholder="Email" id="email" type="email" className="validate input-primary center" />
                        </div>
                      </div>
                    </htmlForm>
                  </div>
                  <div className="row center">
                    <button className="btn" onClick={this.handleRegisterSubmit}>Confirm</button>
                  </div>
                  <div className="row center">
                    <Link to='/app/login'> Go back to login. </Link>
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

RegisterPage.propTypes = propTypes

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => (
  {
    register: (user, pw, firstName, lastName, email) =>
     dispatch(tryRegister(user, pw, firstName, lastName, email))
  }
)

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage)

export default RegisterContainer
