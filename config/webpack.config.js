const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode:"development",
  entry: paths.mainJs,
  output: {
    filename: './bundle-v:[hash:4].js',
    path: paths.buildPath
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: false,
    port: '9090',
    inline: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use:'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hahah',
      filename: 'dist.html',
      template: paths.html,
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ]
};
