module.exports = grunt =>{
    require('load-grunt-tasks')(grunt)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs : {
            dest: 'dest',
            css : 'css',
            scss: 'scss',
            js : 'js'
        },
        cssmin : {
            options:{
                keepSpecialComments : 0
            },
            my_target: {
                files: [{
                    '<%= dirs.dest %>/stylelibs.min.css' : [ '<%= dirs.css %>/**/*.css']
                }]
            }
        },
        sass : {
            dist: {
                options: {
                    style : 'compressed',
                    sourcemap:false
                },
                files:{
                    '<%= dirs.dest %>/style.min.css' : '<%= dirs.scss %>/style.scss'
                }
            }
        },
        uglify: {
            my_target:{
                files:{
                    '<%= dirs.dest %>/jsmain.min.js' : [
                        '<%= dirs.js %>/libs/*.js'
                    ]
                }
            }
        },
        watch : {
            options: {
                livereload : true,
                spawn: false
            },
            sass: {
                files : "<%= dirs.scss %>/**/**/*.scss",
                tasks: ['sass']
            },
            cssmin: {
		        files: "<%= dirs.css %>/**/*.css",
		        tasks: ['cssmin']
		    },
		    uglify: {
		        files: ['<%= dirs.js %>/libs/*.js'],
		        tasks: ['uglify']
		    },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                    	'<%= dirs.dest %>/style.min.css',
	                    '*.html',
	                    '<%= dirs.css %>/*.css',
	                    '<%= dirs.js %>/*.js',
                    ]
                },
                options: {
                    watchTask: true,
                	server:'./'
                },
            }
        }

    })
    grunt.loadNpmTasks('uglify-es')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-browser-sync')
    grunt.registerTask('default',[/*'cssmin', 'sass',*/ 'watch', 'browserSync'])

}