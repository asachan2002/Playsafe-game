module.exports = function (gulp, plugins, config) {
    return function() {
        return gulp.src('./node_modules/phaser/dist/**/*')
            .pipe(gulp.dest('build/dist/lib'));
    };
};