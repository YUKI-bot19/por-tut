'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var cssdeclsort = require('css-declaration-sorter');
var mqpacker = require('css-mqpacker');
// var autoprefixer = require('autoprefixer');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    // .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([  
      require('css-mqpacker')(),
    ]))
    // .pipe(postcss([
    //   autoprefixer()
    // ]))
    .pipe(postcss([cssdeclsort({ order: 'smacss' })]))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});

