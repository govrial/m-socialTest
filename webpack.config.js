const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLPlugin({
            template: "./src/index.html"
        }),

        new CopyPlugin({
            patterns: [
                { from: "src/assets/static/", to: "static" }
            ],
        }),

        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    'resolve-url-loader',
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap:true,
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                        },
                    }
                ]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[name][ext][query]'
                }
            }
        ],
    },
}