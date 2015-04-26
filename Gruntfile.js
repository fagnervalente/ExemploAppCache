'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        manifest: {
            generate: {
                options: {
                    basePath: './',
                    fallback: [
                        '/users cache/offline.html',
                        '/public/images/* cache/images/default.png'],
                    verbose: true,
                    timestamp: true
                },
                src: [
                    'cache/*.html',
                    'cache/scripts/*.js',
                    'cache/stylesheets/*.css',
                    'cache/images/default.png'
                ],
                dest: 'manifest.appcache'
            }
        }
    });

    grunt.loadNpmTasks('grunt-manifest');

    grunt.registerTask('default', ['manifest']);

};