var gulp, rename, uglify;

gulp = require('gulp');
rename = require('gulp-rename');
uglify = require('gulp-uglify');

gulp.task('default', uglifyJS);

function uglifyJS() {
    var dest, src;

    src = './angular-quiet-console.js';
    dest = './';

    return gulp.src(src)
        .pipe(uglify())
        .pipe(rename(dotMinExtension))
        .pipe(gulp.dest(dest))
    ;
}

function dotMinExtension(path) {
    path.extname = '.min' + path.extname;
}
