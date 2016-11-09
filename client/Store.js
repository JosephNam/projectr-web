import { combineReducers } from 'redux-immutable'
import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import routerReducer from './RouteReducer'
import user from './ducks/user'

const middlewares = [thunk, routerMiddleware(browserHistory)]

const store = createStore(
  combineReducers({
    user,
    routing: routerReducer
  }),
  applyMiddleware(...middlewares)
)


console.log(store.getState())

export const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS()
  }
})

export default store
