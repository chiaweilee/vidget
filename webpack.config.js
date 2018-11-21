const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      enforce: 'pre',
      use: ['remove-flow-types-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
}
