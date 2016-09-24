import React from 'react'

const Login = () => (
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
      <button>Login</button>
      <button>Register</button>
    </div>
  </div>
)

export default Login
