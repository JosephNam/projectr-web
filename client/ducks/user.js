/* global fetch: true */
import { Map } from 'immutable'

const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
const REQUEST_LOGIN = 'REQUEST_LOGIN'

const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
const REQUEST_REGISTER = 'REQUEST_REGISTER'

export const requestLogin = () => (
  {
    type: REQUEST_LOGIN
  }
)

export const receiveLogin = (token, email, pw) => {
  console.log(token)
  return {
    type: RECEIVE_LOGIN,
    token,
    email,
    pw
  }
}

export const tryLogin = (username, password) => (
  (dispatch) => {
    dispatch(requestLogin())
    console.log('trying login')
    return fetch('http://localhost:1337/api/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .catch(error => console.log('network fetch failed', error))
    .then(res => res.json())
    .then(json => dispatch(receiveLogin(json.token, username, password)))
    .then(console.log('you are logged in'))
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

export const tryRegister = (username, password, firstName, lastName, email) => (
  (dispatch) => {
    dispatch(requestRegister())
    console.log('requesting register')
    return fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
        email
      })
    })
    .then(res => res.json())
    .then(json => receiveRegister(username, json.password, firstName, lastName, email))
    .then(console.log('congragulations you have registered'))
    .catch(err => console.log(err))
  }
)

const initialState = new Map({
  user: {
    email: null,
    pw: null
  },
  isLoading: false
})


function login(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state.set('isLoading', true)
    case RECEIVE_LOGIN:
      return state.set('user', action.user).set('isLoading', false)
    default:
      return state
  }
}

function register(state = initialState, action) {
  switch (action.type) {
    case REQUEST_REGISTER:
      return state.set('isLoading', true)
    case RECEIVE_REGISTER:
      return state.set('user', action.user).set('isLoading', false)
    default:
      return state
  }
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return login(state, action)
    case RECEIVE_LOGIN:
      return login(state, action)
    case REQUEST_REGISTER:
      return register(state, action)
    case RECEIVE_REGISTER:
      return register(state, action)
    default:
      return state
  }
}
