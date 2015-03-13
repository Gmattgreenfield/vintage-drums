


module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),


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

		watch: {
			scripts: {
				files: ['../assets/js/*.js'],
				tasks: ['uglify'],
			},
			styles: {
				files: ['../_src/css/*.scss','../_src/css/patterns/*.scss' ],
				tasks: ['sass'],
			},
		}


	});


	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-imageoptim');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);

	grunt.registerTask('images', ['imageoptim']);

};



