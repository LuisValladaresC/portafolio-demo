module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-cssnext')({
			autoprefixer: {
				flexbox: false
			},
			customPropierties: false,
		}),
		require('cssnano')({
            preset: 'default',
        }),
	]
}