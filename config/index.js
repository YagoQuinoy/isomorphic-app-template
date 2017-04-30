// Libs
import { merge } from 'lodash'

const config = {
  server: {
    url: process.env.SERVER_URL || 'http://localhost',
    port: process.env.SERVER_PORT || 3000
  }
}

// NOTE: Webpack don't like 'process.env' inside a 'require()', outputing 'ReferenceError'
const env = process.env.NODE_ENV || 'production'

export default merge({}, config, require(`./${env}.js`).default || {})
