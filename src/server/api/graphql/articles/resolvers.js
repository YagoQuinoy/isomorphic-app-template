import Article from '../../models/article'

const Query = {
  articles: () => Article.find(),
  article: (_, { id }) => Article.findOne({ _id: id })
}

const Mutation = {
  editArticle: (_, { }) => {
    console.log('edited')
  }
}

export {
  Query,
  Mutation
}
