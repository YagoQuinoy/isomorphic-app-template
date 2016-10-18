// Redux
import { createStore, applyMiddleware } from 'redux';

// Config
import config from '../../config';

// Api middleware
import apiMiddleware from '../middleware/api';

// Reducers
import rootReducer from '../reducers';

// Utils
import { isBrowser } from '../utils';

const middlewares = [apiMiddleware];

if (config.env === 'development' && isBrowser()) {
  const loggerMiddleware = require('../middleware/logger').default;
  middlewares.push(loggerMiddleware);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

let store;

/**
 * TODO: Refactor name.
 * @param  {Object} [initialState={}]
 * @return {Object}
 */
export default function configureStore(initialState = {}) {
  if(store){
    return store;
  }

  store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
