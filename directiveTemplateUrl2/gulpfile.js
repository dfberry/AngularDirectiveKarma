var gulp = require('gulp');
var browserify = require('gulp-browserify');

var angularTemplateCache = require('gulp-angular-templatecache');

var concat = require('gulp-concat');
var addStream = require('add-stream');

gulp.task('browserify', function() {
  return gulp.
    src('./client/app.js').
    //pipe(addStream('./client/templates.js')).
    //pipe(concat('app.js')).
    pipe(browserify()).
    pipe(gulp.dest('./public'));
});


gulp.task('templates', function () {
  return gulp.src('./public/templates/*.html')
    .pipe(angularTemplateCache({module:'templates', root: '/templates/'}))
    .pipe(gulp.dest('./client'));
});


gulp.task('build',['templates', 'browserify']);