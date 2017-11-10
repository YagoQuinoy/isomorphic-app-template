// Libs
import request from 'axios'

// Config
import config from '../../../config'

const serverUrl = `${config.server.url}:${config.server.port}`

export function getArticles() {
  return {
    type: 'GET_ARTICLES',
    promise: request.get(`${serverUrl}/api/articles`)
      .then(res => res.data)
  }
}

export function getArticle({id}) {
  return {
    type: 'GET_ARTICLE',
    promise: request.get(`${serverUrl}/api/articles/${id}`)
      .then(res => res.data)
  }
}

export function newArticle(article) {
  return {
    type: 'NEW_ARTICLE',
    promise: request.post(`${serverUrl}/api/articles`, article)
      .then(res => {
        console.log(res)
        return res.data
      })
  }
}

export function editArticle(article) {
  return {
    type: 'EDIT_ARTICLE',
    promise: request.put(`${serverUrl}/api/articles`, article)
      .then(res => {
        console.log(res)
        return res.data
      })
  }
}
