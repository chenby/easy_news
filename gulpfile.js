var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("./*.html").on('change', reload);
    gulp.watch("dist/*.js").on('change', reload);
});

gulp.task('default', ['serve']);
