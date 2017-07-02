'use strict';

const gulp 		  = require('gulp'),
      stripdebug  = require('gulp-strip-debug'),
	  uglify 	  = require('gulp-uglify');

/**
 * uglify and copy JavaScript files
 */
gulp.task('dist:min:scripts', () => {
	console.log(`\n\n\t\t\t\t\tUglifying JavaScript files... WAIT - it takes time...\n\n`);
	gulp.src('src/pairs-mole/js/*.js')
		.pipe(stripdebug())
		.pipe(uglify({outSourceMap: true}))
		.pipe(gulp.dest('dist/pairs-mole/js'));
});
