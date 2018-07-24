/**
 * Created by zwlong on 2018/2/23.
 */
varwebpack =require('webpack');
varpath =require('path')
module.exports = {
    entry: {
        index:'./public/javascript/index.js'
    },
    output: {
        path: path.resolve(__dirname,'build'),
        filename:'[name].bundle.js',
        publicPath:'./build/'
    },
    module: {
        loaders: []
    },
    plugins:{}
}
