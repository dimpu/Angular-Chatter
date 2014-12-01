module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		watch: {
            src: {
                files: ['./asserts/scss/**/*.scss'],
                tasks: ['compass:bootstrap']
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
	          base:"",
	          // Prevents Grunt to close just after the task (starting the server) completes
	          // This will be removed later as `watch` will take care of that
	          keepalive: true
	        }
	      }
	    },

		compass: {                      // Task
		    bootstrap: {               // Target
		      options: {              // Target options
		        sassDir: './asserts/scss',
		        cssDir: './asserts/css',
		        environment: 'development'//production
		      }
		    }
		},

	});


	grunt.registerTask('default', [
		'watch',
		'connect'
    ]);



};