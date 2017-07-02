'use strict';

const gulp 		= require('gulp'),
      cleanCSS 	= require('gulp-clean-css');

/**
 * copy and compress CSS files
 */
gulp.task('dist:min:css', () => {
	console.log(`\n\n\t\t\t\t\tCleaning, compressing & copying CSS files...\n\n`);
    gulp.src('src/pairs-mole/css/*.css')
        /*
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log(`${details.name} was ${details.stats.originalSize}, compressed: ${details.stats.minifiedSize} bytes`);
        }))
        */
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/pairs-mole/css'));
});
