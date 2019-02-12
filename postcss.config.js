module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-cssnext')({
			autoprefixer: {
				flexbox: false
			},
			customPropierties: false,
		}),
		require('css-mqpacker'),
	]
}