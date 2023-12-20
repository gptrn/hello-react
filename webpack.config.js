const path = require('path');
const root = path.join(__dirname, '/');
const src = path.join(__dirname, '/src/');


module.exports = {
    mode    : "development",
    entry   : src + "/index.js",
    output  :{
        path: root,
        filename : "index.js"
    },
    module:{
        rules : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets: ['@babel/presets-env', '@babel/presets-react'],
                    plugins: []
                }
            },
            {
                test: /\.(sass|less|css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|ico|jpg|jpeg|bmp|gif)$/,
                type: 'asset/resource'
            }
        ],
    },
    devServer : {
        liveReload : true,
        port: 1234,
        historyApiFallback : true
    }
};