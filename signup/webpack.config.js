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
      port: 8002,
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
            name: 'signup',
            filename: 'remoteEntry.js',
            exposes: {
                './Signup': './src/Signup.js',
            },
            remotes: {
                uicomponents: "uicomponents@http://localhost:8000/remoteEntry.js",
            },
            shared: {
                react: {singleton: true},
                "react-dom": {singleton: true},
                "react-router-dom": {singleton: true}
            }
        })
    ],
};