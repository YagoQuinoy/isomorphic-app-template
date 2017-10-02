import { find } from 'lodash'

import { articles } from '../../mocks.js'

const Query = {
  articles: () => articles,
  article: (_, { id }) => find(articles, { id: id })
}

const Mutation = {
  editArticle: (_, { postId }) => {
    console.log('edited')
  }
}

export {
  Query,
  Mutation
}
