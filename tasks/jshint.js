'use strict';
var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  stylish = require('jshint-stylish'),
  options = {
    lookup: true
  };


gulp.task('jshint', function () {
  return gulp.src('./gulpfile.js')
    .pipe($.debug({
      title: 'file:'
    }))
    .pipe($.jshint(options))
    .pipe($.jshint.reporter(stylish));
});

