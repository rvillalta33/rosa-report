const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const webpack = require('webpack');


module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "supra",
    projectName: "dw-templates-report-mfe",
    webpackConfigEnv,
    argv,
  });
  const Dotenv = require('dotenv-webpack');
  const CopyPlugin = require("copy-webpack-plugin");
  const IndexTemplate = require("html-webpack-plugin");
  const path = require("path");
  return merge(defaultConfig, {
    plugins: [
      // new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
      new Dotenv({
        path: `.env.${webpackConfigEnv.NODE_ENV || 'development'}`, // Lee el archivo .env.development por defecto
      }),
      new CopyPlugin({
        patterns: [
          { from: "src/staticwebapp.config.json", to: "" },
        ],
      }),
      new IndexTemplate({
        filename: 'index.html'
      })
    ],
    output: {
      path: path.resolve(__dirname, 'dist/dw-templates-report-mfe')
    }
  });
};
