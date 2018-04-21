const path = require("path");

module.exports = {
  entry: "./public/entry.jsx",
  output: {
    path: path.resolve(__dirname + "/public"),
    publicPath: "views/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.json$/, loader: "json-loader" },
      {
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
