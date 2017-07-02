'use strict';

const gulp        = require('gulp'),
      gulpTape    = require('gulp-tape'),
      tapColorize = require('tap-colorize');

/**
 * Run unit-tests with TAPE
 * ( see https://www.npmjs.com/package/tape )
 *
 * For now there is only example file, the developer is free to add his own tests
 * while will be working on the code.
 */
gulp.task('dev:tests:tape', () => {
  console.log(`\n\n\t\t\t\t\tRunning unit-tests with TAPE...\n\n`);
  gulp.src(['./testing/tape/tape_examples.js'])
    .pipe(gulpTape({
      reporter: tapColorize()
    }));
});
