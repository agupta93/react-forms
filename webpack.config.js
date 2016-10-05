
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  watch: true,
  devServer: {
    inline: true,
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
