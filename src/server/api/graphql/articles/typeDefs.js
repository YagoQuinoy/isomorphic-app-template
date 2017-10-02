export default `
  type Article {
    id: Int!
    title: String
    content: String
  }
  # the schema allows the following query:
  type Query {
    articles: [Article]
    article(id: Int!): Article
  }
  # this schema allows the following mutation:
  type Mutation {
    editArticle (
      postId: Int!
    ): Article
  }
`
