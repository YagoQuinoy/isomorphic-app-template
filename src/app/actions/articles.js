// Libs
import request from 'axios'

// Config
import config from '../../../config'

/**
 * Load all questions from api
 * @return {Object}
 */
export function getArticles() {
  return {
    type: 'GET_ARTICLES',
    promise: request.get(`${config.server.url}:${config.server.port}/api/articles`)
      .then(res => res.data)
  }
}

export function getArticle({id}) {
  return {
    type: 'GET_ARTICLE',
    promise: request.get(`${config.server.url}:${config.server.port}/api/articles/${id}`)
      .then(res => res.data)
  }
}
