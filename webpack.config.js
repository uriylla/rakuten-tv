const path = require('path');
const webpack = require('webpack');

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
    mode: env,
    plugins: [
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(env)
      })
    ],
    performance: { hints: false }
  }
}