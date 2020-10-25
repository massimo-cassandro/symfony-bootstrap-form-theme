/* eslint-env node */

// generates static test file from url

const gulp = require('gulp'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  remoteSrc = require('gulp-remote-src');



gulp.task('default', function () {
  return remoteSrc('http://sf-form.local:8888', {
    base: null
  })
    .pipe(replace('"/assets/prism/', '"assets/'))
    .pipe(replace('"/assets/', '"assets/'))
    .pipe( rename('index.html') )
    .pipe(gulp.dest('./docs'));
});

