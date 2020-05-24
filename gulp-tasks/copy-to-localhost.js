module.exports = function (gulp, plugins, config) {
    return function(cb) {
        return gulp.src(['./build/dist/**/*']).pipe(gulp.dest('D:/WebPages'));
    };
};