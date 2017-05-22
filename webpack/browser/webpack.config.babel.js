// Config
import config from '../../config'

const webpackConf = require(`./${ config.env }.js`).default

export default webpackConf
