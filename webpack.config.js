var path = require('path')
var webpack = require('webpack')
const vuxLoader = require('vux-loader')
const htmlPlugin = require('html-webpack-plugin')
// const extractTextPlugin = require("extract-text-webpack-plugin")
const publicPath="http://127.0.0.1:9527/dist/"
let webpackConfig = {
    entry: './src/main.js',
    output: {
        //path表示输出到那个文件夹下而已，对路径没有影响
        path: path.resolve(__dirname, 'dist'),
        //会在src,url前面加上这个路径地址
        // publicPath:publicPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|woff|ttf|eot|woff2)$/,
                loader: 'url-loader',
                options: {
                    //limit: 10000,
                    //图片导出路径
                     name: 'images/[name].[ext]'
                }
                // options: {
                //     name: '[name].[ext]?[hash]'
                // }
            },
            {
                test: /vux.src.*?js$/,
                loader: 'babel'
            },
            //引入zepto
            {
                test: require.resolve('zepto'),
                loader: 'exports-loader?window.$!script-loader'
            },

        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json', '.less']
    },
    plugins: [
         //发布html
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        //全局使用zepto,不需要手动import
        new webpack.ProvidePlugin({
            $: 'zepto'
        }),
    ],
    devServer: {

        // contentBase: path.resolve(__dirname, 'dist'),
        // host: 'localhost',
        // // compress: false,
        disableHostCheck: true,
        port: 9527,
        historyApiFallback: true,
        noInfo: true,
        overlay:true,
    },
    performance: {
        hints:false
    }
}

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: [{
        name: 'vux-ui'
    }, {
        name: 'duplicate-style'
    }]
})
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}