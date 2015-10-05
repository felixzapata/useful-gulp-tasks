'use strict';
var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  conventionalChangelog = require('conventional-changelog'),
  fs = require('fs');


gulp.task('changelog', function (done) {

  fs.readFile('./package.json', 'utf8', function (err, rawData) {
    var file = fs.createWriteStream('CHANGELOG.md', { flags: 'a' });

    file.on('finish', function () {
      done();
    });

    conventionalChangelog({
      append: true,
      preset: 'angular',
      host: 'github',
    }, { linkReferences: true }).pipe(file);


  });
});