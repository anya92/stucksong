const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'redux-thunk', 'react-infinite-scroller'];

const config = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[chunkhash].js'
		// publicPath: 'build/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(sass|scss)$/,
				include: [
					path.resolve(__dirname, 'node_modules/bootstrap'),
					path.resolve(__dirname, 'src/styles')
				],
				use: ExtractTextPlugin.extract({
					use: [{
						loader: 'css-loader'
					}, {
						loader: 'sass-loader'
					}],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new ExtractTextPlugin({
			filename: '[name].[contenthash].css',
			disable: process.env.NODE_ENV === 'development'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
		// new webpack.optimize.UglifyJsPlugin()
	]
};

module.exports = config;
