const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "production",
  entry: "./lib/index.ts",
  target: "web",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /dist/, /demo/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "SnowFall",
      type: "umd", // see https://webpack.js.org/configuration/output/#outputlibrarytype
      export: "default", // see https://github.com/webpack/webpack/issues/8480,
      umdNamedDefine: true,
    },
    globalObject: "this",
  },
};
