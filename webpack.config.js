
const path = require('path');
 
module.exports = {
    resolve: {
        extensions: ['.js', '.json'],
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // devtool:'eval',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node_modules/'
            }
        ]
    }
}