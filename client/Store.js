import { combineReducers } from 'redux-immutable'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import routerReducer from './RouteReducer'
import user from './ducks/user'

const store = createStore(
  combineReducers({
    user,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
)

console.log(store.getState())

export default store
