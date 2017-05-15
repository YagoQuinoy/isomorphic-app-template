// Config
import config from '../config'

const browserConfig = require(`./browser/${ config.env }.js`).default
const serverConfig = require('./server').default
export default [browserConfig, serverConfig]
