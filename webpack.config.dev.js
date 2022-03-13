const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@mock': path.resolve(__dirname, 'src/mock/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@router': path.resolve(__dirname, 'src/router/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/')
    }
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExractPlugin({
      filename: "[name].css"
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 3000
  }
};
