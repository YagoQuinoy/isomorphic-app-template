import restRoute from './rest'
import graphqlRoute from './graphql'

export default function route(server) {
  restRoute(server)
  graphqlRoute(server)
}
