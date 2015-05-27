module.exports = {
    //entry: "./ls/index.ls",
    resolve: {
        extensions: ['', '.js', '.ls', '.css'],
        modulesDirectories: [ 'node_modules' ]
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ls$/, loader: "livescript" }
        ]
    }
};