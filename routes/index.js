const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const match = require('react-router').match
const RouterContext = require('react-router').RouterContext
const routes = require('../client/routes')
const Provider = require('react-redux').Provider
const store = require('../client/Store').default

const router = new express.Router()

/* GET home page. */
router.get('/app*', (req, res) => {
  match({ routes: routes.default, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render('index', { html: renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>) })
    } else {
      res.status(404).send('Not found')
    }
  })
})

module.exports = router
