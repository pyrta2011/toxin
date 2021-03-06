const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        app: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    }
}

