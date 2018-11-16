const path = require('path');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: "source-map",
    entry: {
        index: "./src/home-page/home.js",
        about: "./src/about-page/about.js",
        contact: "./src/contact-page/contact.js",
        events: "./src/events-page/events.js",
        team: "./src/team-page/team.js",
        sponsors: "./src/sponsors-page/sponsors.js"
    },
    output: {
        filename: "[name].[hash:20].js",
        path: buildPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",

                options: {
                    presets: ["env"]
                }
            },
            {
                test: /\.(scss|css|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            // translates CSS into CommonJS
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            // Runs compiled CSS through postcss for vendor prefixing
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            // compiles Sass to CSS
                            loader: "sass-loader",
                            options: {
                                outputStyle: "expanded",
                                sourceMap: true,
                                sourceMapContents: true
                            }
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[hash:20].[ext]",
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/home-page/home.html",
            inject: "body",
            chunks: ["index"],
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/about-page/about.html",
            inject: "body",
            chunks: ["about"],
            filename: "about.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/contact-page/contact.html",
            inject: "body",
            chunks: ["contact"],
            filename: "contact.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/events-page/events.html",
            inject: true,
            chunks: ["events"],
            filename: "events.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/team-page/team.html",
            inject: true,
            chunks: ["team"],
            filename: "team.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/sponsors-page/sponsors.html",
            inject: true,
            chunks: ["sponsors"],
            filename: "sponsors.html"
        }),
        new ExtractTextPlugin("styles.[md5:contenthash:hex:20].css", {
            allChunks: "true"
        }),
        new CleanWebpackPlugin(buildPath),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require("cssnano"),
            cssProcessorOptions: {
                map: {
                    inline: false
                },
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
    ],
    // https://webpack.js.org/configuration/optimization/
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
};
