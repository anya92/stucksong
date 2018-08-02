const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					'css-loader',
					'sass-loader',
				],
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
	],
	mode: 'production'
});
