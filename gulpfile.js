'use strict'

var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var jade = require('gulp-jade')

var postcss      = require('gulp-postcss')
var autoprefixer = require('autoprefixer')

gulp.task('sass', function () {
  sass('index.scss')
    .on('error', sass.logError)
    .pipe(postcss([ autoprefixer ]))
    .pipe(gulp.dest(''))
})

gulp.task('jade', function () {
  gulp.src('index.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(''))
})

gulp.task('watch', function () {
  gulp.watch('index.scss', ['sass'])
  gulp.watch('index.jade', ['jade'])
})
