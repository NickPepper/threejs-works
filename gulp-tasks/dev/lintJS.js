'use strict';

const gulp   = require('gulp'),
      jshint = require('gulp-jshint');


/**
 * Lint JavaScript files
 * https://www.npmjs.com/package/gulp-jshint
 */
gulp.task('dev:lint:js', () => {
  console.log(`\n\n\t\t\t\t\tLinting JavaScript files...\n\n`);
  gulp.src(['./src/js/test_threejs.js'])
    .pipe(jshint('./gulp-tasks/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
