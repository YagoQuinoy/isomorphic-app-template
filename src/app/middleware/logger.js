// Libs
import createLogger from 'redux-logger'

const middlewareConfig = {
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => (true) ? true : false // TODO: No mostrar server rendering? mpff
}

export default createLogger(middlewareConfig)
