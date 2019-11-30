/*
clean Symfony cache
*/
var gulp = require('gulp'),
  clean = require('gulp-clean');

gulp.task('default', function () {
  return gulp.src(['./var/cache/dev', './var/cache/prod'], {read: false, allowEmpty: true})
      .pipe(clean({force: true}));
});
