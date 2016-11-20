var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    entry: './src/main.ts',
    output: {
        path:'./dist',
        filename: 'app.bundle.js'
    },
    module:{
        loaders:[
            {test:/\.ts$/, loader:'ts'},
            {test:/\.html$/, loader:'raw-loader'},
            {test:/\.scss$/, loader: ExtractTextPlugin.extract('raw!sass')}
        ]
    },
    resolve:{
        extensions: ['', '.js', '.ts', '.html', 'scss']
    },
    plugins : [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('./css/styles.css'),

        new webpack.DefinePlugin({
        app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            }
        })
    ]
};