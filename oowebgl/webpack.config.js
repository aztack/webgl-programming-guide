const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

const sources = glob.sync('./src/**/*.ts').filter(f => f.indexOf('.d.ts') <  0)

const entry = sources.reduce((all, file) => {
    all[path.basename(file, path.extname(file))] = file;
    return all;
  }, {});

console.log(entry);
module.exports = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: {
    oowebgl: './src/oowebgl.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'oowebgl'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: `ts-loader`,
        options: {
          configFile: path.resolve(__dirname, './tsconfig.webpack.json')
        }
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'OO_DEBUG': JSON.stringify(process.env.NODE_ENV !== 'production')
    })
  ]
}