const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


gulp.task('hello', function () {
  console.log('Hello, world!');
  done();
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('css-min', function () {
  gulp.src("src/css/*.css")
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/css'));
});