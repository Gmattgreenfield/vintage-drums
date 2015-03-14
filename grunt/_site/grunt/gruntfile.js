


module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({

		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'../assets/css/styles.css': '../_src/css/*.scss'
				}
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: '../assets/css/',
					src: ['*.css', '!*.min.css'],
					dest: '../assets/css/',
					ext: '.min.css'
				}]
			}
		},


		uglify: {
			my_target: {
				files: {
				'../assets/js/scripts.min.js': ['../_src/js/*.js']
				}
			}
		},


		imageoptim: {
			myTask: {
				options: {
					jpegMini: false,
					imageAlpha: true,
					quitAfter: true
				},
				src: ['../assets/img/ludiwg']
			}
		},


		shell: {
			jekyllServe: {
				command: 'jekyll serve --source ../',
			}
		},

		watch: {
			scripts: {
				files: ['../assets/js/*.js'],
				tasks: ['uglify'],
			},
			styles: {
				files: ['../_src/css/*.scss','../_src/css/patterns/*.scss' ],
				tasks: [ 'sass', 'cssmin', 'shell:jekyllServe'],
				options: {
					interrupt: true,
					atBegin: true,
					livereload: true
				}
			},
		}


	});



	// Default task(s).
	grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'shell:jekyllServe']);

	grunt.registerTask('images', ['imageoptim']);

};



