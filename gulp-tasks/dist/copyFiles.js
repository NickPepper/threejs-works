'use strict';

const gulp = require('gulp');

/**
 * copy all needed files
 */
gulp.task('dist:copy', () => {
	console.log(`\n\n\t\t\t\t\tCopying all needed files...\n\n`);
    gulp.src('src/pairs-mole/css/assets/**')
        .pipe(gulp.dest('dist/pairs-mole/css/assets'));
    gulp.src('src/pairs-mole/css/fonts/**')
        .pipe(gulp.dest('dist/pairs-mole/css/fonts'));
    gulp.src('src/pairs-mole/sounds/**')
        .pipe(gulp.dest('dist/pairs-mole/sounds'));
    gulp.src('src/pairs-mole/assets/**')
        .pipe(gulp.dest('dist/pairs-mole/assets'));
    gulp.src('src/pairs-mole/content/**')
        .pipe(gulp.dest('dist/pairs-mole/content'));
});
