'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');

//// compiling sass to css////
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
                        browsers: ['last 2 versions'],
                        cascade: false
                    }))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series (['sass', 'prefixer']));
});

gulp.task('prefixer', function(){
  return gulp.src('./css/styles.css')
  .pipe(autoprefixer({
                  browsers: ['last 99 versions'],
                  cascade: false
                  }))
  .pipe(gulp.dest('./prefixer'));
});

gulp.task('default', gulp.series (['sass', 'prefixer', 'sass:watch']));