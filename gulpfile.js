'use strict';

const gulp        = require('gulp'),
      runSequence = require('run-sequence'),
      requireDir  = require('require-dir');


requireDir('./gulp-tasks/dev');
requireDir('./gulp-tasks/dist');

//gulp.task('build', () => runSequence('dev:lint:html'/*, 'dev:lint:css'*/, 'dev:lint:js'/*, 'dev:tests:tape'*/, 'dist:clean', 'dist:min:html', 'dist:min:css', 'dist:copy', 'dist:min:scripts'));

gulp.task('dev', () => runSequence('dev:lint:html', 'dev:lint:css', 'dev:lint:js'/*, 'dev:tests:tape'*/));

gulp.task('default', () => runSequence('dev'));
