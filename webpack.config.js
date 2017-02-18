'use strict';
const helpers = require('./config/helpers');
const webpack = require("webpack");
const {AotPlugin} = require('@ngtools/webpack')

module.exports = {
    entry: {
        main: "./src/main.ts"
    },
    resolve: {
        extensions: ['.js', '.ts'],
        modules: ["./src", "node_modules"]
    },
    output: {
        path: helpers.root("./dist"),
        filename: "[name].js",
    },
    module: {
            rules: [
                {
                    test: /.ts$/,
                    use: [
                        '@ngtools/webpack'
                    ],
                },
                {
                    test: /\.html$/,
                    use: [
                        'html-loader'
                    ]
                }
            ]
        },
         plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                // test: /\.xxx$/, // may apply this only for some modules
                options: {
                    htmlLoader: {
                        minimize: false
                    }
                }
            }),
            new AotPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',

            })
        ]
};