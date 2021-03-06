module.exports = {
	build: {
		options: {
			sizes: [{
				name: 'small',
				width: 500
			}, {
				name: 'medium',
				width: 800
			}]
		},
		files: [
			{expand: true, cwd: '<%= contentDir %>', src: ['**/*.{jpg,png}'], dest: '<%= buildPath %>'}
		]
	}
};
