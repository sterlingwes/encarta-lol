const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('browser-sync', () => {
  browserSync.init({
    server: './public'
  })
});

gulp.task('styles', () => {
  return gulp.src('./dev/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  gulp.src('./dev/scripts/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./public/scripts'))
    .pipe(reload({stream: true}));
});

gulp.task('site', () => {
  gulp.src('./dev/index.html')
    .pipe(gulp.dest('./public'))
    .pipe(reload({stream: true}));
});

gulp.task('watch', () => {
  gulp.watch('./dev/styles/**/*.scss', ['styles']);
  gulp.watch('./dev/scripts/main.js', ['scripts']);
  gulp.watch('./dev/index.html', ['site']);
  gulp.watch('./**/*.html', reload);
});

gulp.task('default', ['styles', 'scripts', 'browser-sync', 'site', 'watch']);