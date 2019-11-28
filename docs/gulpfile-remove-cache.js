/*
Prepare docs resources that an be viewed without Symfony
*/
var gulp = require('gulp'),
  // open = require('gulp-open'),
  clean = require('gulp-clean');

gulp.task('remove_sf_cache', function () {
    return gulp.src(['../var/cache/dev', '../var/cache/prod'], {read: false})
        .pipe(clean({force: true}));
});

/* gulp.task('open', function(){
  gulp.src('/test-form')
  .pipe(open({uri: 'http://sf-form-test.test:8888'}));
}); */


gulp.task('default', ['remove_sf_cache'/* , 'open' */]);
