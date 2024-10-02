const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
    },
    devServer: {
      static: './dist',
      port: 8004
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new ModuleFederationPlugin({
            name: 'main-app',
            filename: 'remoteEntry.js',
            remotes: {
                homepage: "homepage@http://localhost:8001/remoteEntry.js",
                signup: "signup@http://localhost:8002/remoteEntry.js",
            },
            shared: {
                react: {singleton: true},
                "react-dom": {singleton: true},
                "react-router-dom": {singleton: true}
            }
        })
    ],
};