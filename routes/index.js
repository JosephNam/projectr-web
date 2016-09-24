const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const match = require('react-router').match
const RoutingContext = require('react-router').RoutingContext
const routes = require('../client/routes')

const router = new express.Router()

/* GET home page. */
router.get('/app*', (req, res) => {
  match({ routes: routes.default, location: req.url }, (error, redirectLocation, renderProps) => {
    console.log(routes)
    console.log(req.url)
    console.log(redirectLocation)
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render('index', { html: renderToString(<RoutingContext {...renderProps} />) })
    } else {
      res.status(404).send('Not found')
    }
  })
})

module.exports = router
