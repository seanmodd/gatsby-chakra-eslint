const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  // Other rules...
  resolve: {
    fallback: {
      // util: require.resolve('util/'),
      // assert: require.resolve('assert/'),
      stream: require.resolve('stream-browserify'),
      // zlib: require.resolve('browserify-zlib'),
    },
  },
  plugins: [new NodePolyfillPlugin()],
}
