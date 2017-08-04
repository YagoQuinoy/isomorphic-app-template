export default {
  env: 'development',
  webpackServer: {
    url: process.env.WEBPACK_SERVER_URL || 'http://localhost',
    port: process.env.WEBPACK_SEVER_PORT || 5006
  },
  logger: {
    audit: false
  }
}
