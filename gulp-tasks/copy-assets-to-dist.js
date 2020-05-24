module.exports = function (gulp, plugins, config) {
    return function() {
        return gulp.src(['./assets/**/*']).pipe(gulp.dest('./build/dist/assets'));
    };
};