/**
 * Created by Administrator on 2016/12/28.
 */
var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: './js',
        filename: 'main.js'
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'jsx'},
            {test:/\.css$/,loader:'style!css'},
            { test: /\.(png|jpg)$/, loader: 'url-loader'}
        ]
    }
}