const path = require('path');
const webpack = require('webpack');
module.exports = { 
    entry: './public/javascripts/index.js', 
    output: { filename: 'bundle.js', 
        path: path.resolve(__dirname, 'public') 
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                loaders:'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-2'],
                },
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    }/*,
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          jQuery: 'jquery'
        })
    ]*/
};