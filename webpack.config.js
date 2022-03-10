const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, "assets"),
  entry: "./src/index.tsx",
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'assets/dist'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          'ts-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-import')(),
                  require('postcss-simple-vars')({ silent: true }),
                  require('autoprefixer')({}),
                ]
              }
            }
          },
        ]
      },
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.json',
    ]
  },
  target: ["web", "es5"],
};