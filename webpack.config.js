const Autoprefixer = require('Autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/docs'),
    filename: 'bundle.js'
  },
  watch: true,
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
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist/docs'), // boolean | string | array, static file location
    filename: 'bundle.js',
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    port: 8080
  }
}

module.exports = config;
