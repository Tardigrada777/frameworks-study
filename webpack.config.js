const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'budle.js',
        path: path.join(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'eval',
    devServer: {
        port: 4200,
        proxy: {
            '*': 'http://localhost:3030'
        }
    },
    resolve:{
        alias: {
            'framework': path.join(__dirname, 'src/framework')
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
}