import type { Configuration } from 'webpack';

const config: Configuration = {
	entry: './src',
	output: {
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'babel-loader',
				include: /src/,
			},
		],
	},
};

export default config;
