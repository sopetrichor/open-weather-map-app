const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    mode: "development",
    watch: true,
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0",
      port: "5000"
    },
    module: {
      rules: [
        { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
        { test: /\.tsx?$/, loader: "babel-loader" },
        { test: /\.html?$/, loader: "html-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.API_KEY": JSON.stringify(process.env.API_KEY)
      }),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      })
    ]
  };
};
