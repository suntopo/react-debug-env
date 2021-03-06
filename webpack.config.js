const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let webpackConfig = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: ['webpack-hot-middleware/client?quiet=true&reload=true', path.resolve(__dirname, 'src/index.js')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `js/[name].[hash:8].js`,
        chunkFilename: `js/[name].[hash:8].chunk.js`,
        publicPath: '/'
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './src/react/packages/react'),
            'react-dom': path.resolve(__dirname, './src/react/packages/react-dom'),
            'shared': path.resolve(__dirname, './src/react/packages/shared'),
            'react-reconciler': path.resolve(__dirname, './src/react/packages/react-reconciler'),
            'legacy-events': path.resolve(__dirname, './src/react/packages/legacy-events'),
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                "presets": [
                    "@babel/preset-react"
                ],
                "plugins": [
                    "@babel/plugin-transform-flow-strip-types",
                    "@babel/plugin-proposal-class-properties",
                ]
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true,
            title: 'index',
            filename: 'index.html',
            chunks: ['index', 'manifest'],
            chunksSortMode: 'none',
        }),
        new webpack.DefinePlugin({
            __DEV__: false,
            __PROFILE__: true,
            __UMD__: true,
            __EXPERIMENTAL__: false
        })
    ]
}

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = webpackConfig;