const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './js/home.js'
  },
  output: {
    filename : '[hash].js',
    path: __dirname + '/dist',
    // publicPath: './dist/', // 公共目录，即地址栏中的目录地址
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: true,
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',  // 将<link>插入到<head>中
            options: {
              injectType:'linkTag',
            }
          },
          {
            loader: 'file-loader', // 加载文件且生成文件地址
            options: {
              name: '[hash].css' // 文件名
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30 * 1024,
            }
          }
        ],
      },
      {
        test: /\.csv$/i,
        use: [
          {
            loader: 'csv-loader',
            options: {
              dynamicTyping: true,
              header: true,
              skipEmptyLines: true
            }
          }
        ],
      },
    ],
  },

}
