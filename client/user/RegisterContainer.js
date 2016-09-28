import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { tryRegister } from '../ducks/user'

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
      <div className="container">
        <div className="row">
          <htmlForm className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.handleInputChange} placeholder="username" id="username" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input onChange={this.handleInputChange} placeholder="password" id="password" type="password" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.handleInputChange} placeholder="firstName" id="firstName" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input onChange={this.handleInputChange} placeholder="lastName" id="lastName" type="text" className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.handleInputChange} placeholder="email" id="email" type="text" className="validate" />
              </div>
            </div>
          </htmlForm>
        </div>
        <div className="row">
          <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
        </div>
      </div>
    )
  }
}

RegisterPage.propTypes = propTypes

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => (
  {
    register: (user, pw, firstName, lastName, email) => dispatch(
      tryRegister(user, pw, firstName, lastName, email))
  }
)

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage)

export default RegisterContainer
