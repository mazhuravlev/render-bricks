const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
            filename: "app.bundle.js"
    }    ,
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html'
        })
   ],
   devServer: {
       inline: true,
   }
}