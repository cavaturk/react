const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, 'ant-theme-vars.less'), 'utf8'));



module.exports = {



  mode: 'development',


  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    rules: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"],
      }
    },


    {
      test: /\.less$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        {
          loader: "less-loader",
          options: {
            modifyVars: themeVariables
          }
        }
      ]
    }


    ],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};