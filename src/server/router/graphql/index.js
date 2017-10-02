import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from '../../api/graphql/articles/typeDefs'
import resolvers from '../../api/graphql/articles/resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const graphQLOptions = { schema }

export function route(server) {
  server.post('/graphql', graphqlRestify(graphQLOptions))
  server.get('/graphql', graphqlRestify(graphQLOptions))
  server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }))
}
