import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { tryLogin } from '../ducks/user'

const propTypes = {
  login: PropTypes.function
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pw: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePwChange = this.handlePwChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleEmailChange(event) {
    this.state.email = event.target.value
  }

  handlePwChange(event) {
    this.state.pw = event.target.value
  }

  handleLoginSubmit() {
    this.props.login(this.state.email, this.state.pw)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <htmlForm className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.handleEmailChange} placeholder="email" id="email" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input onChange={this.handlePwChange} placeholder="password" id="password" type="password" className="validate" />
              </div>
            </div>
          </htmlForm>
        </div>
        <div className="row">
          <button className="btn" onClick={this.handleLoginSubmit}>Login</button>
          <a className="btn" href="/app/signup">Sign Up</a>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = propTypes

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => (
  {
    login: (user, pw) => dispatch(tryLogin(user, pw))
  }
)

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginContainer
