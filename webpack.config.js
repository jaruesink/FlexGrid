const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('Autoprefixer');

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/docs'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
                  {
                    loader: 'css-loader',
                    options: { modules: true, sourceMap: true }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins() { return [Autoprefixer] }
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                  }],
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    })
  ]
}

module.exports = config;
