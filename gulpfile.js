const sourcemaps = require('gulp-sourcemaps');
const gulp = require("gulp");
const sass = require("gulp-sass");
gulp.task("sass", function() {
    return gulp.src("scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
});
gulp.task("watch", function() {
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});

