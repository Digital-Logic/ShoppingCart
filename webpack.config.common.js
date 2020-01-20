const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['./src/index.ts'],
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: 'server.js',
        publicPath: '/'
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },{
                test: /\.jsx?$/,
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            }]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env.BUILD_TARGET": JSON.stringify('server'),
            "process.env.JWT_ACCESS_EXP": JSON.stringify('2h'),
            "process.env.JWT_REFRESH_EXP": JSON.stringify('600d'),
            "process.env.JWT_RESET_EXP": JSON.stringify('2h'),
            "process.env.BCRYPT_SALT": JSON.stringify(8), // Use a high value in production
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@config': path.resolve(__dirname, 'src/config.js'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@fixtures': path.resolve(__dirname, 'src/__test__/fixtures')
        },
        extensions: [".ts"]
    }
}