var HTMLWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [ "es2015" ]
            }
        },
        {
            test: /\.scss$/, 
            loaders: ['style-loader',  'css-loader', 'sass-loader']
        },{
            test: /\.css$/, 
            loaders: ['style-loader',  'css-loader']
        }]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },
    plugins: [HTMLWebpackPluginConfig,
        new CopyWebpackPlugin([
            { 
                from: 'app/images',
                to: 'images'
            },{
                from: 'app/fonts',
                to: 'fonts'
            }
        ])]
};