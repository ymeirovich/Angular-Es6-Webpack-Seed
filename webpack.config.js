// webpack.config.js
var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    // set the context (optional)
    context: path.join( __dirname, '/src'),
    entry: 'index.js',

    // enable loading modules relatively (without the ../../ prefix)
    resolve: {
        root: path.join( __dirname, '/src')
    },

    resolveLoader: { root: path.join(__dirname, 'node_modules') },
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // load and compile javascript
            { test: /\.js$/, exclude: /node_modules/, loader:'babel', query: { presets: ['es2015', 'stage-1'] } },

            // load css and process less
            { test: /\.css$/, loader: 'style!css'},
            //{ test: /\.svg$/, loader: 'url?limit=8192!svgo'},
            { test: /\.(woff|woff2)$/,  loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf$/,    loader: 'file-loader' },
            { test: /\.eot$/,    loader: 'file-loader' },
            { test: /\.svg$/,    loader: 'file-loader' },
            { test: /\.(jpg|jpeg|gif|png|ico)$/, exclude: /node_modules/, loader:'file-loader'}
        ]
    },

    // webpack dev server configuration
    devServer: {
        contentBase: './src',
        noInfo: false,
        proxy: {
            '/*': {
                target: '',
                secure: false,
                bypass: function () {return '/index.html';}
            }
        }
    },

    // support source maps
    devtool: 'eval',

    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
