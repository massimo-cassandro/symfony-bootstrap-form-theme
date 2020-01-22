/* eslint-env node */
/*
Prepares docs files
*/
var gulp = require('gulp'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  remoteSrc = require('gulp-remote-src'),
  del = require('del');

gulp.task('remove_cache', function () {
  return del(['./var/cache/dev', './var/cache/prod']);
});

/* gulp.task('copy_dist', function () {
  return gulp.src([
    './src/AppBundle/Resources/views/Form/bs4_form_layout.html.twig',
    './web/public/forms/_forms.js',
    './web/public/forms/_forms.scss'
  ])
    .pipe(gulp.dest('./dist/'));
}); */

gulp.task('copy_assets', function () {
  return gulp.src([
    '../web/public/test_form/sf_test_form-min.js',
    '../web/public/test_form/sf_test_form-min.js.map',
    '../web/public/test_form/sf_test_form.css',
    '../web/public/test_form/sf_test_form.css.map',
    '../web/public/test_form/bootstrap-min.js',
    '../web/public/test_form/bootstrap-min.js.map',
    '../web/public/prism/prism-min.js',
    '../web/public/prism/prism-min.js.map',
    '../web/public/prism/prism.css',
    '../web/public/prism/prism.css.map'
  ])
    .pipe(gulp.dest('./assets/'));
});

gulp.task('replace_source', gulp.series('remove_cache', function () {
  return remoteSrc(['test-form'], {
    base: 'http://sf-bs4-form.local:8888/'
  })
    .pipe(replace('/public/prism/', 'assets/'))
    .pipe(replace('/public/test_form/', 'assets/'))
    .pipe( rename('form-test.html') )
    .pipe(gulp.dest('./'));
}));



gulp.task('default', gulp.parallel(/* 'copy_dist',  */'copy_assets', 'replace_source'));



