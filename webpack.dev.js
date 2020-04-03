const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const chokidar = require('chokidar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hot: true,
        before(app, server) {
            chokidar.watch([
                './src/views/**/*.pug',
                './*.md',
            ]).on('all', function () {
                server.sockWrite(server.sockets, 'content-changed');
            })
        }
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            root: path.resolve(__dirname, 'src')
                        }
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            /* your options here */
                        }
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            outputStyle: 'compresed'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/views/index.pug'),
            file: path.join(__dirname, './index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

})