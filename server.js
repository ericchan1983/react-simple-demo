/**
 * Created by ericchen on 16-1-19.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    https: false,
    historyApiFallback: true
}).listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at localhost:${PORT}`);
});

