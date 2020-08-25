const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  optimization: {
    minimize: false,
  },
  watch: true,
})
