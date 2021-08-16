/* eslint-env node */

// generates static test file from url

const gulp = require('gulp'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  remoteSrc = require('gulp-remote-src');


gulp.task('index', function () {
  return remoteSrc('http://sf-form.local:8888', {
    base: null
  })
    .pipe(replace('"./assets/bs4/', '"assets-bs4/'))
    .pipe(replace('href="./test-page/bs4"', 'href="form-theme-bs4.html"'))
    .pipe(replace('href="./test-page/bs5"', 'href="form-theme-bs5.html"'))
    .pipe( rename('index.html') )
    .pipe(gulp.dest('./docs'));
});

gulp.task('bs4', function () {
  return remoteSrc('http://sf-form.local:8888/test-page/bs4', {
    base: null
  })
    .pipe(replace('"/assets/prism/', '"prism/'))
    .pipe(replace('"/assets/bs4/', '"assets-bs4/'))
    .pipe(replace('href="/"', 'href="index.html"'))
    .pipe( rename('form-theme-bs4.html') )
    .pipe(gulp.dest('./docs'));
});

gulp.task('bs5', function () {
  return remoteSrc('http://sf-form.local:8888/test-page/bs5', {
    base: null
  })
    .pipe(replace('"/assets/prism/', '"prism/'))
    .pipe(replace('"/assets/bs5/', '"assets-bs5/'))
    .pipe(replace('href="/"', 'href="index.html"'))
    .pipe( rename('form-theme-bs5.html') )
    .pipe(gulp.dest('./docs'));
});

gulp.task('default',
  gulp.series('index', 'bs4', 'bs5')
);
