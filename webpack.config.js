module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: 'file-loader',
        options: {
          name: './img/[name].[ext]'
        }
      },
    ],
  },
  entry: './app',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
