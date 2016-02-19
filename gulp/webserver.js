'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  gulp.src('./www/')
    .pipe(webserver({
      host: 'localhost',
      port: 8000,
      livereload: true,
      fallback: 'index.html'
    }));
});
