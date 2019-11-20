const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const configurations = {
  development: {
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    mode: 'development',
  },

  production: { devtool: 'source-map', mode: 'production' },

  test: {
    devtool: 'inline-source-map',
    mode: 'none',
  },
};

module.exports = () => {
  const nodeEnv = process.env.NODE_ENV || 'development';

  console.log('BUILDING THE CONFIGURATION FOR: ', nodeEnv);

  return {
    ...configurations[nodeEnv],
    entry: {
      app: './src/index.tsx',
      init: ['./src/init.ts'],
    },
    module: {
      rules: [
        {
          include: path.resolve(__dirname, 'src'),
          test: /\.(sa|sc|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          include: path.resolve(__dirname, 'src'),
          loader: 'file-loader',
          test: /\.(png|svg|jpg|gif|ico|ttf)$/,
        },
        {
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          loader: 'awesome-typescript-loader',
          test: /\.tsx?$/,
        },
      ],
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    optimization: {
      nodeEnv,
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },
    output: {
      filename: `[name].[hash].js`,
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        {
          from: 'src/static',
          to: 'static',
        },
      ]),
      new HtmlWebpackPlugin({
        favicon: 'src/static/favicons/favicon.ico',
        filename: 'index.html',
        minify: {
          collapseWhitespace: true,
        },
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        chunkFilename: '[id].css',
        filename: '[name].css',
      }),
      new webpack.HashedModuleIdsPlugin(),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      modules: [path.resolve('./node_modules'), path.resolve('./src')],
    },
  };
};
