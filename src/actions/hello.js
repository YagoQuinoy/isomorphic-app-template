// Libs
import request from 'axios';

// Config
import config from '../../config';

/**
 * Load all questions from api
 * @return {Object}
 */
export function loadQuestions() {
  return {
    type: 'LOADED_HELLO',
    promise: request.get(config.API_BASE_URL + '/api/hello')
      .then(res => {
        return res.data;
      })
  };
}
