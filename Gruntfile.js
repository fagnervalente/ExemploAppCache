'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        manifest: {
            generate: {
                options: {
                    basePath: './',
                    fallback: [
                        '/users /cache/indisponivel.html',
                        '/images/ /cache/images/default.png'],
                    verbose: true,
                    timestamp: true,
                    preferOnline: true
                },
                src: [
                    'cache/*.html',
                    'cache/scripts/*.js',
                    'cache/stylesheets/*.css',
                    'cache/images/*'
                ],
                dest: 'manifest.appcache'
            }
        },
        watch: {
            cache: {
                files: ['cache/**/*', 'Gruntfile.js'], 
                tasks: ['manifest']
            }
        }
    });

    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};