const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  performance: { hints: false },
  context: path.resolve(__dirname, '../../resources/assets/'),
  entry: {
    app: ['./js/app.ts', './css/app.css'],
    guest: ['./js/guest.ts', './css/guest.css'],
    bootstrap: ['./css/bootstrap.css']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|jpg)(\?.*$|$)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              publicPath: '../img',
              outputPath: '../../public/img/',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, '../../public/'),
  },
}
