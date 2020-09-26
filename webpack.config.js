const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  return {
		mode: 'development',
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
		},
		devtool: 'inline-source-map',
		devServer: {
			contentBase: './dist',
		},
		plugins: [
			new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
			new HtmlWebpackPlugin({
				title: 'sass playground',
				filename: 'index.html',
				template: 'src/index.html'
			}),
		],
    module: {
      rules: [
        {
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"],
				},
      ],
    },
  };
};
