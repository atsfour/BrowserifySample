'use strict';

var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var tslint = require('gulp-tslint');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var transform = require('vinyl-transform');
var browserify = require('browserify');

var config = {
  'tsFiles': ['ts/main/**/*.ts'],
  'browserify': {
    'entry': {
      'entries': [
        './ts/main/app.ts',
        './node_modules/angular-route/index.js',
        './node_modules/angular-ui-bootstrap/index.js',
      ],
      'debug': true },
    'dest': './www/js',
    'output': { 'filename': 'bundle.js' }
  }
};

var tslintTask = function (dirIn) {
  gulp.src(dirIn)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(tslint())
    .pipe(tslint.report("verbose"));
};

gulp.task('browserify',['tslint'], function () {
  return browserify(config.browserify.entry)
    .plugin('tsify')
    .bundle()
    .on("error", function (err) {
      console.log("Error : " + err.message);
      this.emit("end");
    })
    .pipe(source(config.browserify.output.filename))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(ngAnnotate())
    //.pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.browserify.dest));
});

gulp.task('tslint', [], () => {
  tslintTask(config.tsFiles)
});

gulp.task('watch:ts', ['browserify'], () => {
  gulp.watch(config.tsFiles, ['browserify'])
});
