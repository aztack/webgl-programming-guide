const path = require('path');
const webpack = require('webpack');
var DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const glob = require('glob');

const sources = glob.sync('./src/**/*.ts').filter(f => f.indexOf('.d.ts') <  0)

const entry = sources.reduce((all, file) => {
    all[path.basename(file, path.extname(file))] = file;
    return all;
  }, {});

const decl = sources.map((file) => {
  const moduleName = path.basename(file, path.extname(file));
  return {
    moduleName,
    out: `./dist/${moduleName}.d.ts`
  };
}, {});

const configFileName = path.resolve(__dirname, './tsconfig.json')
console.log(`Using ${configFileName}`);
console.log(entry);
module.exports = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      loader: `ts-loader`
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'OO_DEBUG': JSON.stringify(process.env.NODE_ENV !== 'production')
    })
  ]
}