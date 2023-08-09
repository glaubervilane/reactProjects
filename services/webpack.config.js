// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'web',

  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http"),
      "url": require.resolve("url/"),
      "querystring": require.resolve("querystring-es3"),
    }
  }
};