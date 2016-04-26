var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
  return gulp.
    src('./client/app.js').
    pipe(browserify()).
    pipe(gulp.dest('./public'));
});
