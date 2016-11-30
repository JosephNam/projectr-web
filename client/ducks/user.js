/* global fetch: true */
/* global sessionStorage: true */
import { Map } from 'immutable'
import { push } from 'react-router-redux'

require('isomorphic-fetch')

const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
const REQUEST_LOGIN = 'REQUEST_LOGIN'

const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
const REQUEST_REGISTER = 'REQUEST_REGISTER'

const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

export const requestLogin = () => (
  {
    type: REQUEST_LOGIN
  }
)

export const receiveLogin = (token, username) => {
  console.log(token)
  return {
    type: RECEIVE_LOGIN,
    token,
    username
  }
}

export const receiveProjects = projects => (
  {
    type: RECEIVE_PROJECTS,
    projects
  }
)

export const fetchProjects = token => (
  (dispatch) => {
    fetch('http://localhost:1337/api/projects', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Projectr-Token': token
      }
    })
    .catch(error => console.log('network fetch failed', error))
    .then(res => res.json())
    .then((json) => {
      if (json.success) {
        console.log(json.result)
        dispatch(receiveProjects(json.result))
        dispatch(push('/app/dashboard'))
        return
      }
    })
  }
)

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
    .then((json) => {
      if (json.success) {
        sessionStorage.setItem('projectrToken', json.token)
        sessionStorage.setItem('user', username)
        dispatch(receiveLogin(json.token, username))
        dispatch(fetchProjects(json.token))
        return
      }
    })
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
    .then(dispatch(push('/app/login')))
    .catch(err => console.log(err))
  }
)

export const fetchInfo = () => (
  (dispatch) => {
    console.log('hello working on fetching info')
    const username = sessionStorage.getItem('user')
    const token = sessionStorage.getItem('projectrToken')
    console.log(username, token)
    if (username !== undefined && token !== undefined) {
      console.log('doing some stuff then')
      console.log(dispatch)
      dispatch(receiveLogin(token, username))
      dispatch(fetchProjects(token))
    }
  }
)

const initialState = new Map({
  username: undefined,
  projects: [],
  isLoading: false
})


function project(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      console.log(action)
      return state.set('projects', action.projects)
    default:
      return state
  }
}

function login(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state.set('isLoading', true)
    case RECEIVE_LOGIN:
      return state.set('username', action.username)
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
    case RECEIVE_PROJECTS:
      return project(state, action)
    default:
      return state
  }
}
