// gulp
var gulp = require('gulp');
var sass = require('gulp-suitcss');
var inject = require('gulp-inject');
var connect = require('gulp-connect');


var config = {
    privateDir: 'src/',
    publicDir: 'dev/',
    app:{
    'js': [
      '**/*.js'
      ],
    'assets': 'assets/**/*',
    'scss': 'styles/styles.scss',
    'html': [
      '**/*.html',
    ],
    'index': 'index.html',
    'moduleDefinitionJS': 'app/app.js'
  }
};

// TASKS

gulp.task('buildCSS', function(){
  return gulp.src('src/styles/styles.css')
    .pipe(sass())
    .pipe(gulp.dest('dev/styles/'))
});

gulp.task('buildAssets', function(){
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('dev/assets/'))
});

gulp.task('buildVendor', function () {
  return gulp.src('src/vendor/**/*.js')
  .pipe(gulp.dest('dev/vendor/'));
});


gulp.task('buildHTML', ['buildCSS', 'buildAssets', 'buildVendor'], function(){
  return gulp.src([
      'src/**/*.html',
      'src/**/*.js'
    ])
    .pipe(gulp.dest('dev'));
});


gulp.task('connect', function () {
  connect.server({
    root: 'dev/',
    port: 9100
  });
});

  gulp.task('default', ['buildHTML', 'connect']);
