const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const cssNano = require('gulp-cssnano')
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function sassFunc(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(concatCss('custom.css'))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('compress', function compressFunc() {
    return gulp.src('./dist/css/custom.css')
      .pipe(cssNano())
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('compressJs', function() {
    gulp.src(['./src/js/*.js'])
      .pipe(minify())
      .pipe(gulp.dest('./dist/js'))
  });
 

gulp.task('watch', function watchFunc() {
    gulp.watch('./src/sass/*.scss', gulp.series('sass', 'compress'));
    gulp.watch('./src/js/*.js', gulp.series('compressJs'));
});
