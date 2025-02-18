const path = require('path');

module.exports = {
  entry: './index.js',  // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js',  // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply this rule to JavaScript files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: {
          loader: 'babel-loader',  // Use Babel loader to transpile JavaScript files
        },
      },
    ],
  },
  mode: 'production',  // Mode can be 'development' or 'production'
};
