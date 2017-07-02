'use strict';

const gulp   = require('gulp'),
      jshint = require('gulp-jshint');

/**
 * Lint HTML files
 * https://www.npmjs.com/package/gulp-jshint
 */
gulp.task('dev:lint:html', () => {
  console.log(`\n\n\t\t\t\t\tLinting HTML files...\n\n`);
  gulp.src(['./src/test_threejs.html'])
    .pipe(jshint.extract('auto')) // available options are auto|always|never , the default is 'auto'
    .pipe(jshint('./gulp-tasks/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
