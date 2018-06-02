/*
* 生产环境编译脚本
*/


var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//clean-webpack-plugin
var CleanWebpackPlugin = require('clean-webpack-plugin');
//webpack-uglify-js-plugin
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var baseWebpackConfig = require('./webpack.base.config');


module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  mode: 'product',
  plugins: [
    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      }
    }),
     //product plugin
     new webpack.optimize.OccurrenceOrderPlugin(),
     new webpackUglifyJsPlugin({
        cacheFolder: path.resolve(__dirname, '../output/cached_uglify/'),
        debug: true,
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compressor: {
          warnings: false
    }
  }),
     new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "css/[name].[chunkhash:8].css",
    chunkFilename: "[id].css"
    }),
     //clean 
     new CleanWebpackPlugin(['build','public'], {
         root:__dirname,
         verbose:true,
         dry:false,
         exclude:[]
     })
  ]
})