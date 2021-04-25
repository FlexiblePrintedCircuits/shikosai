var gulp = require('gulp');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var sass = require("gulp-sass");
var pug = require('gulp-pug');
 
gulp.task("sass", function () {
    gulp.src("./src/sass/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./src/dist/css"));
});

gulp.task("pug", function () {
    gulp.src("./src/pug/**/*.pug")
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest("./src/dist"));
});

gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./src/dist/js'));
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
});

//task実行
gulp.task('default', gulp.series(gulp.parallel('sass', 'pug', 'js', 'watch')));