module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.initConfig({

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app1: {
                files: [
                    {
                        expand: true,
                        src: ['js/main.js'],
                        ext: '.annotated.js', // Dest filepaths will have this extension.
                        extDot: 'last'       // Extensions in filenames begin after the last dot
                    }
                ]
            }
        },


        uglify: {
            serv: {
                options: {
                    report: 'min',
                    mangle: true
                },
                files: {
                    'js/appService.min.js': ['js/service.js']
                }
            },

            main: {
                options: {
                    report: 'min',
                    mangle: false
                },

                files: {
                    'js/appMain.min.js': ['js/main.annotated.js']
                }

            }
        }


    });


    grunt.registerTask('ugly', ['uglify']);

    grunt.registerTask('ngAnn', ['ngAnnotate']);


};


