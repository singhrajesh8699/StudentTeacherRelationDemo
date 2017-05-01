

var path = require('path');

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

var config = {

   context:path.join(__dirname,"src"),
   entry: './main.js',

   output: {
      path: __dirname +'/src',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
  //    host : '10.200.204.59',
      port: 7070
   },
   resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',


            query: {
               presets: ['es2015', 'react','stage-0'],
               
            }
         },
         {
        test: /(\.scss|\.css)$/,
         }
    ]
   },
   postcss: [autoprefixer],
  sassLoader: {
    data: '@import "styles/_config.scss";',
    includePaths: [path.resolve(__dirname, './src')]
  },
 
}

module.exports = config;
