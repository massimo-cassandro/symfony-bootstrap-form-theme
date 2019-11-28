/*
Prepare docs resources that an be viewed without Symfony
*/
var gulp = require('gulp'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  remoteSrc = require('gulp-remote-src');


gulp.task('copy_assets', function () {
  gulp.src([
    '../web/public/forms/test_page_assets/sf_test_form-min.js',
    '../web/public/forms/test_page_assets/sf_test_form-min.js.map',
    '../web/public/forms/test_page_assets/sf_test_form.css',
    '../web/public/forms/test_page_assets/sf_test_form.css.map',
    '../web/public/prism/prism-min.js',
    '../web/public/prism/prism-min.js.map',
    '../web/public/prism/prism.css',
    '../web/public/prism/prism.css.map'
  ])
    .pipe(gulp.dest('./assets/'));
});

gulp.task('replace_source', function () {
  remoteSrc(['test-form'], {
    base: 'http://sf-form-test.test:8888/'
  })
  .pipe(replace('/public/prism/', 'assets/'))
  .pipe(replace('/public/forms/test_page_assets/', 'assets/'))
  .pipe( rename('form-test.html') )
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['copy_assets', 'replace_source']);
