import { combineReducers } from 'redux-immutable'
import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import routerReducer from './RouteReducer'
import user from './ducks/user'
import project, { fetchTags } from './ducks/project'

const middlewares = [thunk, routerMiddleware(browserHistory)]

const store = createStore(
  combineReducers({
    project,
    user,
    routing: routerReducer
  }),
  applyMiddleware(...middlewares)
)

store.dispatch(fetchTags())

console.log(store.getState())

export const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS()
  }
})

export default store
