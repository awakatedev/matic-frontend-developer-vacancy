const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: 'development',
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve('./public/index.html')],
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|svg|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon:'./public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/[name].css',
      }),
      new SourceMapDevToolPlugin({
        filename: "[file].map"
      }),
      new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000
  }
};