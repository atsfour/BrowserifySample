'use strict';

var gulp = require('gulp');
var tsd = require("gulp-tsd");

gulp.task("tsd", function(callback) {
  tsd({
    command: "reinstall",
    config: "tsd.json"
  }, callback);
});
