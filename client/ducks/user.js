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
    console.log('trying login')
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
    console.log('requesting register')
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
