var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('./webpack.config.js');
var browserSync = require('browser-sync').create();

gulp.task('webpack', function() {
  console.log("gulpfile webpack")
  return gulp
    .src("./js/index.js")
    .pipe(webpack(config))
	.pipe(gulp.dest('./'));

  console.log("webpack"); 
})

gulp.task('browser-sync',['webpack'], function() {
  console.log("browser-sync'");

  browserSync.init({
    browser:"Google chrome",
      server: {
        baseDir: "./",
        index:"index.html"
	  }
	})
})

gulp.task('test',['webpack','browser-sync'], function() {
  gulp.watch('./js/*/*.js', ['webpack']);
  gulp.watch('./js/*.js', ['webpack']);
  browserSync.watch("index.html").on("change", browserSync.reload);
  browserSync.watch("bundle.js").on("change", browserSync.reload);

  console.log("test"); 
})