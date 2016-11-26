import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { tryLogin } from '../ducks/user'
import {Link} from 'react-router';

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
      <div className="valign-wrapper" style={{width: '100%', height: '100%', position: 'absolute'}}>
        <div className="valign" style={{width: '100%'}}>
          <div className="container">
            <div className="row">
              <div className="col s12 m6 offset-m3">
                <div>
                  <div className="card-content">
                    <div className="row center">
                      <p>
                        Sign into your Projectr account :)
                      </p>
                    </div>
                    <htmlForm>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handleEmailChange} placeholder="Email" id="email" type="email" className="center input-primary" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input onChange={this.handlePwChange} placeholder="Password" id="password" type="password" className="center input-primary" />
                        </div>
                      </div>
                    </htmlForm>
                  </div>
                  <div>
                      <div className="center">
                          <button className="btn teal" onClick={this.handleLoginSubmit}>Login</button>
                      </div>
                      <br/>
                      <div className="center">
                         <p>
                            Don't have a Projectr account?
                            <Link to="/app/signup"> Register here. </Link>    
                         </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      // <div className="container valign-wrapper">
      //   <div className='valign'>
      //       <div className="row center">
      //         <htmlForm className="col s12">
      //           <div className="input-field">
      //               <input onChange={this.handleEmailChange} placeholder="Email" id="email" type="text" className="validate" />
      //             </div>
      //             <div className="input-field">
      //               <input onChange={this.handlePwChange} placeholder="Password" id="password" type="password" className="validate" />
      //             </div>
      //         </htmlForm>
      //       </div>
      //     <div className="row center">
      //       <a className="btn" href="/app/signup">Sign Up</a>
      //       <button className="btn" onClick={this.handleLoginSubmit}>Login</button>
      //     </div>
      //   </div>
      // </div>
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
