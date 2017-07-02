'use strict';

const gulp    = require('gulp'),
      cssLint = require('gulp-csslint');

/**
 * Lint CSS files
 * https://www.npmjs.com/package/gulp-csslint
 */
gulp.task('dev:lint:css', () => {
  console.log(`\n\n\t\t\t\t\tLinting CSS files...\n\n`);
  // see https://github.com/CSSLint/csslint/wiki/Working-with-Rules for all available Rules
  gulp.src(['./src/css/test_threejs.css'])
    .pipe(cssLint())
    .pipe(cssLint.formatter(require('csslint-stylish'))); // just display warnings & errors without the build process termination
});
