'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  var config = {
    src: 'src',
    dist: 'dist'
  };

  var banner = '/*!\n'
          + ' * ValityCss v0.0.2 (http://lukaszwatroba.github.io/valitycss)\n'
          + ' * Created by Łukasz Wątroba (http://lukaszwatroba.com)\n'
          + ' * Licensed under MIT (https://github.com/LukaszWatroba/valitycss/blob/master/LICENSE)\n'
          + ' */\n\n';

  grunt.initConfig({

    config: config,

    watch: {
      sass: {
        files: ['<%= config.src %>/{,**/}*.{scss,sass}'],
        tasks: ['sass:dist', 'autoprefixer']
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          banner: banner
        },

        files: [{
          expand: true,
          cwd: '<%= config.src %>',
          src: ['*.scss'],
          dest: '<%= config.dist %>',
          ext: '.css'
        }]
      },
      min: {
        options: {
          style: 'compressed',
          banner: banner
        },

        files: [{
          expand: true,
          cwd: '<%= config.src %>',
          src: ['*.scss'],
          dest: '<%= config.dist %>',
          ext: '.min.css'
        }]
      },
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/',
          src: '{,*/}*.css',
          dest: '<%= config.dist %>/'
        }]
      }
    }
  });

  grunt.registerTask('run', [
    'clean:dist',
    'sass:dist',
    'autoprefixer',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'sass',
    'autoprefixer'
  ]);

  grunt.registerTask('default', [
    'watch'
  ]);
};
