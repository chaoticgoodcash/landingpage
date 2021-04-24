var gulp = require("gulp");
var pug = require('gulp-pug');
var sass = require('gulp-sass');

// Pug to HTML

gulp.task('pug', function(){
    return gulp.src('./*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('sass', function(){
    return gulp.src('./*.sass')
    .pipe(sass({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function(){
    gulp.watch('./*.pug', gulp.series(['pug']))
    gulp.watch('./*.sass', gulp.series(['sass']))
});

gulp.task('default', gulp.series(['pug', 'sass', 'watch']));