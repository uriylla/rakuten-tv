const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: ["@babel/polyfill", './src/app.js'],
    output: {
      path: path.join(__dirname, 'public'),
      filename : 'bundle.js',
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node-modules/
      },{
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    mode: isProduction ? 'production' : 'development',
    performance: { hints: false },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}