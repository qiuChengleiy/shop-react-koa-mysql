/*
* 基础编译脚本
*/

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {  
	entry: __dirname+'/src/app.js',
	devtool:'eval-source-map',//编译文件和源文件，使得代码可读性高
	output:{
		path:__dirname+'/../output',
		filename:'bundle-[hash].js' 
	},
  module:{
		rules: [
           //js | jsx...
           //cnpm i --save-dev babel-loader babel-core babel-preset-env babel-preset-react
         //if hot react--  cnpm i --save-dev babel-plugin-react-transform
         //important .babelrc  
           {
           	 test:/(\.js|\.jsx)$/,
           	 use:{
           	     loader:"babel-loader"
             	 //options:[]...  if has .babelrc can instead
            	},
             exclude:/node_modules/
           },
           //css
           //npm i --save-dev css-loader style-loader postcss-loader autoprefixer
           {
           	test:/(\.css|\.scss|\.less)$/,
           	//如果loader多多情况下，这样写
           	use:[
           	    MiniCssExtractPlugin.loader,
           	    "css-loader"
        //    		{
        //    			loader:"style-loader"
        //    		},
        //    		{
        //    			loader:"css-loader",
        //    			//css modules
        //    			options:{
        //          		modules:true,
        //          		localIdentName:'[name]__[local]--[hash:base64:5]'
        //    			}
        //    		},
        //    		//css preix
        //    		{
 				   // loader:'postcss-loader'
 				   // //need set postcss.config.js require('autoprefixer')
        //    		}
           		
           	],
           	exclude:/node_modules/
           },
           //打包图片资源
           {
           	test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
           	loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
           },
           {
           	test:/\.png$/,
           	loader:"file-loader?name=images/[hash:8].[name].[ext]"
           }
		]
	},
    resolve: {
      //第三方库引入
        alias: {
           jquery$: __dirname+'/../public/js/jquery.min.js'
        }
       
    },
  plugins: [
    new ExtractTextPlugin('css/[name].css')
    
  ]
};