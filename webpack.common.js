var webpack = require("webpack");
var nsWebpack = require("nativescript-dev-webpack");
var sources = require("webpack-sources");
var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var AotPlugin = require('@ngtools/webpack').AotPlugin;

var nativescriptTarget = require('./webpack-plugins/nativescript-target');
var aotFixPath = path.join(__dirname, "webpack-plugins", "aot-fix.js");

module.exports = function (platform, destinationApp) {
    var entry = {};
    entry.bundle = "./" + nsWebpack.getEntryModule();
    entry.vendor = "./vendor";

    return {
        context: path.resolve("./app"),
        target: nativescriptTarget,
        entry: entry,
        output: {
            pathinfo: true,
            path: path.resolve(destinationApp),
            // path: "dist",
            libraryTarget: "commonjs2",
            filename: "[name].js",
            jsonpFunction: "nativescriptJsonp"
        },

        resolveLoader: {
            alias: {
                "aot-fix": aotFixPath,
            },
            moduleExtensions: ['-loader']
        },
        resolve: {
            extensions: [
                ".aot.ts",
                ".ts",
                ".js",
                "." + platform + ".ts",
                "." + platform + ".js",
            ],
            modules: [
                "node_modules/tns-core-modules",
                "node_modules"
            ]
        },
        node: {
            //Disable node shims that conflict with NativeScript
            "http": false,
            "timers": false,
            "setImmediate": false,
            "console": false,
        },
        module: {
            loaders: [
                {
                    test: [/\.css$/, /\.html$/],
                    loader: "raw-loader"
                },
                {
                    test: /\.ts$/,
                    loaders: ['@ngtools/webpack', 'aot-fix']
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        'raw-loader', 'resolve-url', 'sass'
                    ]
                },
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ["vendor"]
            }),
            new webpack.DefinePlugin({
                global: 'global',
                __dirname: '__dirname',
                "global.TNS_WEBPACK": 'true',
            }),
            new CopyWebpackPlugin([
                { from: "**/*.css" },
            ]),
            new nsWebpack.GenerateBundleStarterPlugin([
                "./vendor",
                "./bundle",
            ]),
            // new nsWebpack.NativeScriptJsonpPlugin(),
            new AotPlugin({
                tsConfigPath: 'tsconfig-aot.json',
                entryModule: 'app/app.module#AppModule',
                typeChecking: false
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: "static",
                openAnalyzer: false,
                generateStatsFile: true,
                reportFilename: path.join(__dirname, "report", platform + '-report.html'),
                statsFilename: path.join(__dirname, "report", platform + '-stats.json'),
            }),
            // new webpack.optimize.UglifyJsPlugin({
            //     mangle: false,
            //     // compress: false,
            //     // beautify: true,
            //     compress: {
            //         warnings: true
            //     },
            //     output: {
            //         comments: false
            //     },
            //     sourceMap: false
            // }),
        ]
    };
};
