import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('./dist'), // __dirname not available in ES modules
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve('./dist'),
    },
    port: 9000,
    open: true,
  },
};
