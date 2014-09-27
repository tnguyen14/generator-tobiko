module.exports = {
	options: {
		livereload: '<%= livereload %>' || 35730
	},
	css: {
		files: ['<%= sassDir %>/**/*.scss'],
		tasks: ['sass:dev', 'autoprefixer:dev']
	},
	contents: {
		files: ['<%= contentDir %>/**/*.{json,md}'],
		tasks: ['import_contents', 'generate_html:dev']
	},
	templates: {
		files: ['<%= templates.dir %>/**/*.{hbs,html}'],
		tasks: ['generate_html:dev']
	},
	images: {
		files: ['<%= contentDir %>/**/*.{jpg,png,gif}'],
		tasks: ['newer:imagemin:dev', 'newer:responsive_images']
	},
	assets: {
		files: ['<%= sassDir %>/assets'],
		tasks: ['copy:build']
	},
	tobiko: {
		files: ['tobiko/**/*.{js,yaml}', 'Gruntfile.js'],
		tasks: ['process']
	}
}
