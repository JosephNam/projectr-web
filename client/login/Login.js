import React, { PropTypes } from 'react'

const propTypes = {
  login: PropTypes.function
}

const Login = props => (
  <div className="container">
    <div className="row">
      <htmlForm className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="email" id="email" type="text" className="validate" />
          </div>
          <div className="input-field col s6">
            <input placeholder="password" id="password" type="password" className="validate" />
          </div>
        </div>
      </htmlForm>
    </div>
    <div className="row">
      <button className="btn" onClick={props.login}>Login</button>
      <a className="btn" href="/app/signup">Sign Up</a>
    </div>
  </div>
)

Login.propTypes = propTypes

export default Login
