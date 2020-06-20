const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts',
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images',
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })]
};
