module.exports = function (gulp, plugins, config) {
    return function(cb) {
        return gulp.src(['public/index.html']).pipe(gulp.dest('build/dist/'));
    };
};