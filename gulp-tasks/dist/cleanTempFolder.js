'use strict';

const gulp  = require('gulp'),
      clean = require('gulp-clean-dest');

/**
 * clean temporary build directory
 */
gulp.task('dist:clean', () => {
	console.log(`\n\n\t\t\t\t\tCleaning temporary build directory...\n\n`);
	gulp.src('./dist/pairs-mole/**')
		.pipe(clean('**/*.*'));
});
