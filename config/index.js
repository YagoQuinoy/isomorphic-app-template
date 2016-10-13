// Libs
import _ from 'lodash';

const port = 3000;

const config = {
  baseUrl: process.env.BASE_URL || 'http://localhost',
  port: process.env.PORT || port
};

// NOTE: Webpack don't like 'process.env' inside a 'require()', outputing 'ReferenceError'
const env = process.env.NODE_ENV || 'production';

export default _.merge({}, config, require('./environment/' + env + '.js').default || {});
