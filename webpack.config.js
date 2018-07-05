const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {

          },
        }],
      },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=src/assets/[name].[ext]" },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
