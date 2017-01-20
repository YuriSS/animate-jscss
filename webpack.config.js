const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'bundle/'),
    filename: 'scripts.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: "style!css"
      },
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff2"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader"
      },

      {
        test: /(\.js)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      }
    ]
  }
};
