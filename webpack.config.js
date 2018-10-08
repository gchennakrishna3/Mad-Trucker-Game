var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },

            {test: /\.css$/, loader: 'style-loader!css-loader?sourceMap'},
            { test: /\.less$/,loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap'},
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader'
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
            { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
