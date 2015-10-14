module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    exec: {
      // submodules: { cmd: 'git submodule update --init' },
      npm: { cmd: 'npm install' },
      bower: { cmd: 'bower install'},
      tsd: { cmd: 'tsd reinstall'},
      server: { cmd: 'node server/server.js' },
      tsServer: { cmd: 'node_modules/.bin/tsc server/server.ts -m commonjs -t ES5'},
      tsPublic: { cmd: 'node_modules/.bin/tsc public/js/app.ts public/js/**/*.ts -t ES5'},
    },

    tsd: {
        refresh: {
            options: {
                // execute a command
                command: 'reinstall',

                //optional: always get from HEAD
                latest: true,

                // specify config file
                config: 'tsd.json',

                // experimental: options to pass to tsd.API
                opts: {
                    // props from tsd.Options
                }
            }
        }
    },

    // copy: {
    //   main: {
    //     src: 'typings/**/*.ts',
    //     dest: 'public/',
    //   },
    // },

    less: {
      development: {
        options: {},
        // compile ALL less files found in css, and nested anywhere in views
        files: { "public/css/main.css" : ["public/css/*.less", "public/app/*/**.less"] }
      }
    },

    watch: {
      options: { spawn: false },
      public: {
        files: ["public/**/*.ts"],
        tasks: ["exec:tsPublic"],
        options: { livereload: true },
      },
      server: {
        files: ["server/*.ts", "server/**/*.ts"],
        tasks: ["exec:tsServer", "develop"],
      },
      html: {
        files: ["public/**/*.html", "public/*.html"],
        options: { livereload: true },
      },
    },

    develop: {
      server: {
        file: 'server/server.js',
        nodeArgs: [],
        args: [],
        env: { NODE_ENV: 'development', PORT: 3000 },
      }
    },

    clean: {
      // remove old javascript files
      public: ["public/js/*.js*", "public/js/**/*.js*"]
    },

  });

  grunt.loadNpmTasks('grunt-exec')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-develop')
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-tsd');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['exec:bower','exec:tsServer', 'exec:tsPublic', 'watch'])
  //grunt.registerTask('default', ['copy', 'exec:bower','exec:tsServer', 'exec:tsPublic', 'develop', 'watch'])
  //grunt.registerTask('default', ['copy', 'exec:bower','exec:tsServer', 'develop', 'watch'])
  
};