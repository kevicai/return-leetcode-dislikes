const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// This will direct webpack to load all .ts files through the ts-loader, and output a dist folder containing bundled .js files in our project.
module.exports = {
   mode: "production",
   // convert .ts files to .js files
   entry: {
      backgroundJob: path.resolve(__dirname, "..", "src", "backgroundJob.ts"),
      contentScript: path.resolve(__dirname, "..", "src", "contentScript.ts"),
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      // copy public files to dist
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]
      }),
   ],
};