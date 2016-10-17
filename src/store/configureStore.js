// Redux
import { createStore, applyMiddleware } from 'redux';

// Redux middleware
import apiMiddleware from 'middleware/api'

// Config
import config from 'config'

// Reducers
import rootReducer from 'reducers'

const middlewares = [apiMiddleware]

if(config.env === 'development') {
  const loggerMiddleware = require('../middleware/logger').default
  middlewares.push(loggerMiddleware)
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
