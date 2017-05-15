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

// Config
import config from '../../../config'

// Routes
import routes from '../../app/routes'

// Assets paths
const serverConfig = (config.env === 'development') ? config.webpackServer : config.server

const favicon = `${serverConfig.url}:${serverConfig.port}/assets/favicon.ico`
const scripts = [`${serverConfig.url}:${serverConfig.port}/assets/app.bundle.js`]
const styles = `${serverConfig.url}:${serverConfig.port}/assets/styles.css`

// if (config.env === 'development') {
//   scripts.push(`${serverConfig.url}:${serverConfig.port}/assets/dev.bundle.js`)
// }

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
        const action = need()
        promises.push(store.dispatch(action))
      })
    }

    return match
  })

  Promise.all(promises)
    .then(() => {
      const context = {}

      // Get html
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
      const templatePath = path.resolve(`${__dirname}/templates/index.ejs`)
      ejs.renderFile(templatePath, {
        html,
        favicon,
        styles,
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
