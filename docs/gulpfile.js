/*
Prepare docs resources that an be viewed without Symfony
*/
var gulp = require('gulp'),
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  remoteSrc = require('gulp-remote-src'),
  clean = require('gulp-clean');

gulp.task('remove_sf_cache', function () {
    return gulp.src(['../var/cache/dev', '../var/cache/prod'], {read: false})
        .pipe(clean({force: true}));
});


gulp.task('copy_assets', function () {
  gulp.src([
    '../src/AppBundle/Resources/public/forms/test_page_assets/sf_test_form-min.js',
    '../src/AppBundle/Resources/public/forms/test_page_assets/sf_test_form-min.js.map',
    '../src/AppBundle/Resources/public/forms/test_page_assets/sf_test_form.css',
    '../src/AppBundle/Resources/public/forms/test_page_assets/sf_test_form.css.map',
    '../src/AppBundle/Resources/public/prism/prism-min.js',
    '../src/AppBundle/Resources/public/prism/prism-min.js.map',
    '../src/AppBundle/Resources/public/prism/prism.css',
    '../src/AppBundle/Resources/public/prism/prism.css.map'
  ])
    .pipe(gulp.dest('./assets/'));
});

gulp.task('replace_source', function () {
  remoteSrc(['test-form'], {
    base: 'http://sf-form-test.test:8888/'
  })
  .pipe(replace('/assets/prism/', 'assets/'))
  .pipe(replace('/assets/forms/test_page_assets/', 'assets/'))
  .pipe( rename('form-test.html') )
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['remove_sf_cache', 'copy_assets', 'replace_source']);
