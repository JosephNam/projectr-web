/* global sessionStorage: true */
/* global fetch: true */

import { Map } from 'immutable'

require('isomorphic-fetch')

const REQUEST_CREATE_PROJECT = 'REQUEST_CREATE_PROJECT'
const RECEIVE_CREATE_PROJECT = 'RECEIVE_CREATE_PROJECT'

export const requestCreateProject = () => (
  {
    type: REQUEST_CREATE_PROJECT
  }
)

export const receiveCreateProject = success => (
  {
    type: RECEIVE_CREATE_PROJECT,
    success
  }
)

export const tryCreateProject = newProject => (
  (dispatch) => {
    dispatch(requestCreateProject())
    console.log('requesting create project')
    return fetch('http://localhost:1337/api/projects', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Projectr-Token': sessionStorage.get('projectrToken')
      },
      body: JSON.stringify({
        name: newProject.project_name,
        description: newProject.project_description
      })
      .catch(error => console.log('network fetch failed', error))
      .then(res => res.json())
      .then((json) => {
        if (json.success) {
          dispatch(receiveCreateProject(newProject))
        }
      })
    })
  }
)

const initialState = new Map({
  project: undefined,
  isLoading: false
})

export default function project(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_PROJECT:
      return state.set('isLoading', true)
    default:
      return state
  }
}
