const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['env', 'stage-0', 'react'],
            plugins: ['transform-decorators-legacy', "transform-runtime", "transform-async-to-generator"],
            "env": {
              "development" : {
                "compact": false
              }
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
