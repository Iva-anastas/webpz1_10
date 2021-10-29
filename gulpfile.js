let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let concat = require('gulp-concat');
gulp.task('sass', function () {
    return gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('concat-css', function () {
    return gulp.src('./src/css/*.scss')
        .pipe(concat('style.scss'))
        .pipe(gulp.dest('./dist/scss'));
})
module.exports.some = gulp.series('sass', 'concat-css');