const HtmlWebPackPlugin = require("html-webpack-plugin");
const pkg = require('./package.json')

module.exports = {
  // Entry files for our popup and background pages
  entry: {
    path: "./src/index.js",
  },
  output: {
    library: "path",
    libraryTarget: "umd",
    libraryExport: "default",
    path: __dirname + "/docs",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [  
          {
            loader: 'string-replace-loader',
            options: {
              search: '@@VERSION@@',
              replace: pkg.version,
            },
          }, {
            loader: "babel-loader",
            options: {
              cacheDirectory: true 
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ]
};
