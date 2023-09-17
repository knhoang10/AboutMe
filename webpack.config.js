const path = require('path');

module.exports = {
  entry: './public/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.?(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.?(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ['@babel/preset-env', '@babel/preset-react']
      //     }
      //   }
      // },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
        type: "asset/resource",
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};