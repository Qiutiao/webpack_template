module.exports = {
  mode: 'development',
  entry: {
    main: './js/home.js'
  },
  output: {
    filename : '[name].bundle.js',
    path: __dirname + '/dist',
    // publicPath: './dist/', // 公共目录，即地址栏中的目录地址
  },
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
              name: '[name].bundle.css' // 文件名
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
