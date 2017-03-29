// Libs
import request from 'axios';

// Config
import config from '../../../config';

/**
 * Load all questions from api
 * @return {Object}
 */
export function loadHello(params) {
  return {
    type: 'LOADED_HELLO',
    promise: request.get(`${config.baseUrl}:${config.port}/api/hello/${params.name}`)
      .then(res => {
        return res.data;
      })
  };
}
