// Libs
import { merge } from 'lodash'

const config = {
  env: process.env.NODE_ENV || 'production',
  server: {
    url: process.env.SERVER_URL || 'http://localhost',
    port: process.env.SERVER_PORT || 3000
  }
}

const envConfig = require(`./${config.env}.js`).default
export default merge({}, config, envConfig || {})
