'use strict';

var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach((task) => {
  require('./gulp/' + task)
});

gulp.task('default', ['webserver', 'watch:ts']);
