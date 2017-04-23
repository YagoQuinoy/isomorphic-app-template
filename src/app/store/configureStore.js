// Redux
import { createStore, applyMiddleware } from 'redux'

// Config
import config from '../../../config'

// Api middleware
import apiMiddleware from '../middleware/api'

// Models
import App from '../models/App'

// Reducers
import rootReducer from '../reducers'

const middlewares = [apiMiddleware]

if (config.env === 'development' && process.env.BROWSER) {
  const loggerMiddleware = require('../middleware/logger').default
  middlewares.push(loggerMiddleware)
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

let store // TODO: Crear un factory o una class

/**
 * Creates a redux store with middleware
 * @param  {Object} [initialState]
 * @return {Object}
 */
export default function configureStore(initialState) {
  if(store) {
    return store
  }

  const state = App.getImmutable(initialState)
  store = createStoreWithMiddleware(rootReducer, state)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
