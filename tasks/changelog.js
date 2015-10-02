'use strict';
var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  conventionalChangelog = require('conventional-changelog'),
  fs = require('fs');


gulp.task('changelog', function (done) {

  fs.readFile('./package.json', 'utf8', function (err, rawData) {
    var file = fs.createWriteStream('CHANGELOG.md');

    file.on('finish', function () {
      done();
    });

    conventionalChangelog({
      preset: 'angular',
    }, { linkReferences: true }).pipe(file);


  });
});