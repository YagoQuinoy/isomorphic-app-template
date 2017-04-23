// Libs
import path from 'path'
import ejs from 'ejs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { matchPath } from 'react-router-dom'

// Store
import configureStore from '../../app/store/configureStore'
import { StaticRouter } from 'react-router'

// Components
import App from '../../app/components/App'

// Container
// import Header from '../../app/containers/Header'
// import Footer from '../../app/containers/Footer'

// Config
import config from '../../../config'

// Routes
import routes from '../../app/routes'

// Utils
import { getOrigin } from '../utils'

// Assets paths
const port = (config.env === 'development') ?
  config.server.webpackDevServerPort : config.server.port

const favicon = `${config.server.url}:${port}/static/favicon.ico`
const scripts = [`${config.server.url}:${port}/static/app.bundle.js`]

if (config.env === 'development') {
  scripts.push(`${config.server.url}:${port}/static/dev.bundle.js`)
}

/**
 * Server rendering a React application
 * @param  {Request} req
 * @param  {Response} res
 * @param  {Function} next
 */
export function render(req, res, next) {
  // Create Store
  const store = configureStore({})

  // Load initial state
  const promises = []
  routes.some(route => {
    const match = matchPath(req.path(), route)

    const {needs} = route.component // NOTE: Contemplar needs como array?

    if (match && needs) {
      needs.forEach((need) => {
        console.log(req.params)
        const action = need()
        console.log(action)
        promises.push(store.dispatch(action))
      })
    }

    return match
  })

  // TODO: Mmmmmmmmm esta es la forma adecuada? mmmm no sé
  // if(App.needs) {
  //   const action = App.needs(origin)
  //   promises.push(store.dispatch(action))
  // }
  //
  // if(Header.needs) {
  //   const action = Header.needs(origin)
  //   promises.push(store.dispatch(action))
  // }
  //
  // if(Footer.needs) {
  //   const action = Footer.needs(origin)
  //   promises.push(store.dispatch(action))
  // }

  Promise.all(promises)
    .then(() => {
      const context = {}

      // Get htmk
      const html = ReactDOMServer.renderToString(
        <StaticRouter location = { req.url } context = { context } >
          <Provider store = { store } >
            <App / >
          </Provider>
        </StaticRouter>
      )

      // Check redirections
      if(context.url) {
        res.writeHead(301, { Location: context.url })
        res.end()
        return
      }

      // Get initial state
      const state = store.getState()

      // Parse to JSON
      const initialState = escape(JSON.stringify(state))

      // Render template
      ejs.renderFile(path.resolve(__dirname + '/templates/index.ejs'), {
        html,
        favicon,
        scripts,
        initialState
      }, (err, rendered) => {
        if(err) {
          // TODO: Captura bien este horror?
          console.log(err)
          next(err)
          return
        }

        res.end(rendered)
        next()
      })
  }).catch((err) => {
    // TODO: Gestionar este horror
    console.log(err)
    next(err)
  })
}
