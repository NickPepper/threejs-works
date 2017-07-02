'use strict';

const gulp 		= require('gulp'),
      cleanhtml = require('gulp-cleanhtml');

/**
 * copy and compress HTML files
 */
gulp.task('dist:min:html', () => {
	console.log(`\n\n\t\t\t\t\tCleaning & compressing HTML files...\n\n`);
	gulp.src(['./src/pairs-mole/*.html'])
		.pipe(cleanhtml())
		.pipe(gulp.dest('dist/pairs-mole'));
});
