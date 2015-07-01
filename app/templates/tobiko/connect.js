'use strict';

module.exports = function(){
	return {
		dev: {
			options: {
				port: '<%= port %>',
				base: ['<%= buildPath %>', '.'],
				livereload: '<%= livereload %>'
			}
		},
		prod: {
			options: {
				base: '<%= buildPath %>',
				keepalive: true,
			}
		}
	};
};
