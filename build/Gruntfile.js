module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-gh-pages');

    var vendor_js = require('./vendor.config.js').vendor.js;


	grunt.initConfig({
		clean:{
			bin:[
				"../bin/*"
			],
            dist:[
                "../dist/*"
            ],
			hooks: [
            ],
            options: {
                force: true
            }
		},	
 		copy: {
 			bin:{
 				 files: [
                    {
                        src: ['**'],
                        cwd: '../bin',
                        dest: '../dist/',
                        expand: true
                    }
                ]
 			},
            index: {
                files: [
                    {
                        src: '../source/index.html',
                        dest: '../bin/index.html'
                    }
                ]
            },
            build_assets: {
                files: [
                    {
                        src: [ '**', '!scss/**' ],
                        cwd: '../source/assets',
                        dest: '../bin/assets/',
                        expand: true
                    }
                ]
            },
            build_appjs: {
                files: [
                    {
                        src: [ '**' ],
                        cwd: '../source/js/app',
                        dest: '../bin/js/app',
                        expand: true
                    }
                ]
            },
            boot: {
                files: [
                    {
                        src: '../source/js/app/boot.js',
                        dest: '../dist/js/app/boot.js',
                        expand: false
                    }
                ]
            },
     
            build_vendorjs: {
                files: [
                    {
                        src: [vendor_js],
                        // cwd: "build",
                        flatten: true,
                        dest: '../bin/js/vendor',
                        expand: true
                    }
                ]
            },
            compile: {
                files: [
                    {
                        src: [ '**' ],
                        cwd: '<%= buildDir %>/assets',
                        dest: '<%= compileDir %>/assets',
                        expand: true
                    },
                    {
                        src: [ '**' ],
                        dest: '<%= compileDir %>/vendor',
                        cwd: '<%= buildDir %>/vendor',
                        expand: true
                    }
                ]
            }
        },
        concat:{
            vendor:{
                src: vendor_js,
                dest:"../bin/js/vendor.js"
            }
        },
		watch: {
            src: {
                files: ['../source/asserts/scss/**/*.scss'],
                tasks: ['compass:bootstrap','copy:build_assets']
            },
            options: {
                livereload: true,
            },
        },
        // grunt-contrib-connect will serve the files of the project
	    // on specified port and hostname
	    connect: {
	      all: {
	        options:{
	          port: 9000,
	          hostname: "127.0.0.1",
	          base:"../bin",
	          // Prevents Grunt to close just after the task (starting the server) completes
	          // This will be removed later as `watch` will take care of that
	          // keepalive: true
	        },
	        open:{
            	 target: 'http://localhost:9000', 
            }
	      }
	    },
		compass: {                      // Task
		    bootstrap: {               // Target
		      options: {              // Target options
		        sassDir: '../source/asserts/scss',
		        cssDir: '../source/asserts/css',
		        environment: 'development'//production
		      }
		    }
		},
	
		requirejs: {
            compile: {
                options: {
                    baseUrl: "../source/js/app",
                    out: '../dist/js/app/main.js',
                    name: 'main'

                },
                preserveLicenseComments : false,
                optimize: "uglify"
            }
        },

        'gh-pages': {
            options: {
              base: '../dist'
            },
            src: ['**']
        }


	});


	grunt.registerTask('default', [
		'clean:bin',
		'copy:index',
		'copy:build_assets',
		'copy:build_appjs',
		'concat:vendor',
		'connect:all',
		'watch'
    ]);

	grunt.registerTask('build',[
		'clean:bin',
		'copy:index',
		'copy:build_assets',
        'copy:build_appjs',
		'concat:vendor',
        'clean:dist',
		'copy:bin',
        'copy:boot',
		'requirejs',
        'gh-pages'

	]);

	

  



};