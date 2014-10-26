var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('lint', function() {
  gulp.src(['./meadowlark.js', 'public/js/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('mocha', function () {
    gulp.src('./qa/tests-*js', {read: false})
      .pipe(mocha({ui: 'tdd'}));
});

gulp.task('default', ['mocha', 'lint']);
