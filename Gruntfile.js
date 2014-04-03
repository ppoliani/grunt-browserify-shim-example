module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      vendor: {
        src: [],
        dest: 'public/vendor.js',
        options: {
          alias: ['./lib/jquery.js:jqueryJS', './lib/moments.js:momentWrapper'],
          /*shims: {
          	jquery: './lib/jquery.js',
          	moment: './lib/moments.js'
          }*/ // No need to add this option
        }
      },
      client: {
        src: ['client/**/*.js'],
        dest: 'public/app.js',
        options: {
          external: ['./lib/jquery.js:jqueryJS', './lib/moments.js:momentWrapper'], // Wont finish the task if this line is not present
          bundleOptions: {
          	debug: true
          }
        }
      }
    },

    concat: {
      'public/main.js': ['public/vendor.js', 'public/app.js']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['browserify', 'concat']);

};
