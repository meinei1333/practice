module.exports = {
    //entry: "./ls/index.ls",
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