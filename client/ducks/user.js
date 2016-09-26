/* global fetch: true */
const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
const REQUEST_LOGIN = 'REQUEST_LOGIN'

const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
const REQUEST_REGISTER = 'REQUEST_REGISTER'

export const requestLogin = () => (
  {
    type: REQUEST_LOGIN
  }
)

export const receiveLogin = (email, pw) => (
  {
    type: RECEIVE_LOGIN,
    email,
    pw
  }
)

export const tryLogin = (email, pw) => (
  (dispatch) => {
    dispatch(requestLogin())
    return fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        pw
      })
    })
    .then(res => dispatch(receiveLogin(res.body.email, res.body.pw)))
    .catch(error => console.log('network fetch failed', error))
  }
)

export const requestRegister = () => (
  {
    type: REQUEST_REGISTER
  }
)

export const receiveRegister = (email, pw) => (
  {
    type: RECEIVE_REGISTER,
    email,
    pw
  }
)

export const tryRegister = (email, pw) => (
  (dispatch) => {
    dispatch(requestRegister())
    return fetch('/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        pw
      })
    })
    .then(res => receiveRegister(res.body.email, res.body.pw))
    .catch(err => console.log(err))
  }
)
