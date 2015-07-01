module.exports = {
	dev: {
		options: {
			style: 'expanded'
		},
		files: {
			'<%= buildPath %>/css/main.css': '<%= sassDir %>/main.scss'
		}
	},
	prod: {
		options: {
			style: 'compressed'
		},
		files: {
			'<%= buildPath %>/css/main.css': '<%= sassDir %>/main.scss'
		}
	}
};
