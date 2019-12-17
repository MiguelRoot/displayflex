module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: './img/[hash].[ext]',
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: './fonts/[hash].[ext]',
                            limit: 50000
                        }
                    }
                ]
            }
        ]

    }

}