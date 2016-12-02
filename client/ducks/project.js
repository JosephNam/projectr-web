/* global sessionStorage: true */
/* global fetch: true */
/* global document: true */
/* global $: true */

import { Map } from 'immutable'

require('isomorphic-fetch')

const REQUEST_CREATE_PROJECT = 'REQUEST_CREATE_PROJECT'
const RECEIVE_CREATE_PROJECT = 'RECEIVE_CREATE_PROJECT'

const RECEIVE_TAGS = 'RECEIVE_TAGS'

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
        'Projectr-Token': sessionStorage.getItem('projectrToken')
      },
      body: JSON.stringify({
        name: newProject.project_name,
        description: newProject.project_description
      })
    })
    .catch(error => console.log('network fetch failed', error))
    .then(res => res.json())
    .then((json) => {
      if (json.success) {
//        dispatch(addSelf())
        dispatch(receiveCreateProject(newProject))
      }
    })
  }
)

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
})

export const fetchTags = () => (
  (dispatch) => {
    console.log('requesting tags')
    return fetch('http://localhost:1337/api/tags', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Projectr-Token': sessionStorage.getItem('projectrToken')
      }
    })
    .catch(error => console.log('network fetch failed', error))
    .then(res => res.json())
    .then((json) => {
      console.log('tags api request is,', json)
      if (json.success === true) {
        dispatch(receiveTags(json.result))
      }
    })
  }
)

const initialState = new Map({
  project: undefined,
  isLoading: false,
  tags: []
})

export default function project(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_PROJECT:
      return state.set('isLoading', true)
    case RECEIVE_TAGS:
      return state.set('tags', action.tags)
    default:
      return state
  }
}
