import * as path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import WebpackPwaManifest from "webpack-pwa-manifest"
import { fileURLToPath } from "url"
// import { InjectManifest } from "workbox-webpack-plugin"
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

export const entry = {
  app: "./src/app.js"
}
export const resolve = {
  alias: { src: path.resolve(__dirname, "./src") }
}

export const output = {
  path: path.resolve(__dirname, "../build"),
  filename: "bundle.js"
}
export const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/template/index.html",
    favicon: "./src/assets/logo.png",
    filename: "index.html"
  }),
  // new HtmlWebpackPlugin({
  //     template: "./src/template/team-info.html",
  //     favicon: "./src/assets/app_logo.png",
  //     filename: "team-info.html"
  // }),
  // new webpack.ProvidePlugin({
  //     "window.jQuery": "jquery",
  //     "window.$": "jquery",
  //     jQuery: "jquery",
  //     $: "jquery"
  // }),
  new WebpackPwaManifest({
    // filename: "manifest.json",
    name: "My App",
    short_name: "My App",
    description: "My App",
    start_url: ".",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#2196F3",
    crossorigin: "use-credentials",
    ios: true,
    publicPath: "/",
    inject: true,
    icons: [
      {
        src: path.resolve("src/assets/logo.png"),
        sizes: [96, 128, 512]
      }
    ],
    gcm_sender_id: "908740532940"
  })

  // new MiniCssExtractPlugin({
  //     filename: "style.css"
  // })
]
export const performance = {
  hints: process.env.NODE_ENV === "production" ? "warning" : false
}
export const devtool = "source-map"

export const module = {
  rules: [
    // {
    //     test: /\.s?[ac]ss$/,
    //     use: [
    //         MiniCssExtractPlugin.loader,
    //         {
    //             loader: "css-loader",
    //             options: {
    //                 sourceMap: true
    //             }
    //         },
    //         {
    //             loader: "sass-loader",
    //             options: {
    //                 sourceMap: true
    //             }
    //         }
    //     ]
    // },
    // {
    //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //     loader: "url-loader?limit=10000&mimetype=application/font-woff"
    // },
    // {
    //     test: /\.html$/,
    //     include: [
    //         path.resolve(__dirname, "../src/static")
    //     ],
    //     loader: "file-loader"
    // },
    // {
    //     test: /\.(ttf|eot|webp|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //     loader: "file-loader"
    // },
    {
      test: /\.html$/i,
      include: [
        path.resolve(__dirname, "../src")
      ],
      loader: "html-loader"
    },
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/
    }
  ]
}