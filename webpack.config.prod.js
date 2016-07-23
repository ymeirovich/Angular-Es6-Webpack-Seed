const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.join(__dirname, '/src'),
    entry: 'index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },
    resolve: {
        root: path.join(__dirname, '/src'),
        alias: {
            'ngRoute': 'angular-route'
        }
    },
    resolveLoader: {root: path.join(__dirname, 'node_modules')},
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'stage-1']}},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.html$/, loader: 'html'},
            {test: /\.(woff|woff2)$/, loader: 'file-loader?name=./fonts-woff/[hash].[ext]'},
            {test: /\.ttf$/, loader: 'file-loader?name=./fonts/[hash].[ext]'},
            {test: /\.eot$/, loader: 'file-loader?name=./fonts/[hash].[ext]'},
            {test: /\.svg$/, loader: 'file-loader?name=./img/[hash].[ext]'},
            {test: /\.(jpg|jpeg|gif|png|ico)$/, exclude: /node_modules/, loader: 'file-loader?name=./img/[hash].[ext]'}
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
};
