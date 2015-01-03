/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function(grunt) {

    var controllersPath = 'scripts/controllers/',
        servicesPath = 'scripts/services/',
        directivesPath = 'scripts/directives/';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify: {
        //    options: {
        //        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //    },
        //    build: {
        //        src: 'src/<%= pkg.name %>.js',
        //        dest: 'build/<%= pkg.name %>.min.js'
        //    }
        //},
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'scripts/main.min.js': [
                        'https://apis.google.com/js/client.js',
                        'scripts/libs/angular.min.js',
                        'scripts/libs/angular-touch.js',
                        'scripts/libs/spotify-web-api.js',
                        'scripts/main.js',

                        servicesPath + 'favouritesServices.js',
                        servicesPath + 'youtubeServices.js',
                        servicesPath + 'releasesServices.js',
                        servicesPath + 'playerServices.js',
                        servicesPath + 'artistServices.js',
                        servicesPath + 'lastfmServices.js',
                        servicesPath + 'facebookServices.js',
                        servicesPath + 'genresServices.js',
                        servicesPath + 'searchServices.js',
                        servicesPath + 'helperServices.js',
                        servicesPath + 'helperServices.js',
                        servicesPath + 'spotifyServices.js',

                        directivesPath + 'directives.js',

                        controllersPath + 'favouritesController.js',
                        controllersPath + 'playerController.js',
                        controllersPath + 'releasesController.js',
                        controllersPath + 'searchController.js',
                        controllersPath + 'artistsController.js',
                        controllersPath + 'genresController.js',
                        controllersPath + 'overlayController.js',
                        controllersPath + 'loginController.js',
                        controllersPath + 'tipsController.js',
                    ]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};