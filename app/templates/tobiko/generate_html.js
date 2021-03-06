module.exports = {
	options : {
		partialDir : '<%= templates.partialDir %>',
		helperDir : '<%= templates.helperDir %>'
	},
	dev: {
		src: '<%= templates.dir %>/*.hbs',
		dest: '<%= buildPath %>',
		data: '<%= dataPath %>',
	},
	prod: '<%= generate_html.dev %>'
};
