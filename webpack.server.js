// Libs
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

// Webpack config
var webpackConfig = require('./webpack.config');

// Constant
var port = 3001;

var browserConfig = webpackConfig[0];
new WebpackDevServer(webpack(browserConfig), {
  publicPath: browserConfig.output.publicPath,
  // hot: true,
  historyApiFallback: true,
  compress: true,
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: false
  }
}).listen(port, 'localhost', function(err) {
  if(err) {
    console.log(err);
  }

  console.log('Webpack dev server is listening at localhost:' + port);
});
