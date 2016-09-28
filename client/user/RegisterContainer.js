import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { tryRegister } from '../ducks/user'

const propTypes = {
  register: PropTypes.function
}

const RegisterPage = props => (
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
      <button className="btn" onClick={props.register}>Register</button>
    </div>
  </div>
)

RegisterPage.propTypes = propTypes

const mapStateToProps = () => (
  {}
)

const mapDispatchToProps = dispatch => (
  {
    register: (user, pw) => dispatch(tryRegister(user, pw))
  }
)

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage)

export default RegisterContainer
