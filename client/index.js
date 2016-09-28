/* global document: true */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import LoginContainer from './user/LoginContainer'
import RegisterContainer from './user/RegisterContainer'
import store from './Store'

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS()
  }
})

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/app">
        <Route path="login" component={LoginContainer} />
        <Route path="signup" component={RegisterContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('content'))
