// Libs
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

// App config
import config from './config';

// Webpack config
import webpackConfig from './webpack.config';

const browserConfig = webpackConfig[0];
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
}).listen(config.webpackDevServerPort, 'localhost', function(err) {
  if(err) {
    console.log(err);
    return;
  }

  console.log('Webpack dev server is listening at localhost:' + port);
});
