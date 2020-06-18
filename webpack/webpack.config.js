var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        es: './es.js',
        cjs: './cjs.js'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: process.env.NODE_ENV,
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
    devServer: {},
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        test: /(\.js|\.jsx|\.ts|\.tsx)$/,
                        use: [
                            {
                                loader: 'babel-loader'
                            }
                        ],
                        exclude: /node_modules(?![/|\\]@ucloud[/|\\]console-dev-dependences[/|\\]scripts[/|\\]template[/|\\])/
                    },
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.(js|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};
