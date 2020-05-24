module.exports = function (gulp, plugins, config) {

    function task(name) {
        return require('./' + name)(gulp, plugins, config);
    }
    gulp.task('clean-build', task('clean-build'));
    gulp.task('compile-debug', task('compile-debug'));
    gulp.task('copy-assets-to-dist', task('copy-assets-to-dist'));
    gulp.task('copy-html-to-dist', task('copy-html-to-dist'));
    gulp.task('copy-framework-to-dist', task('copy-framework-to-dist'));
    gulp.task('copy-to-localhost', task('copy-to-localhost'));
    return function (cb) {
        return plugins.sequence(
                [
                    'clean-build',
                    'compile-debug',
                ],
                [   'copy-framework-to-dist',
                    'copy-assets-to-dist',
                    'copy-html-to-dist'
                ],
                'copy-to-localhost'
                )(cb);
    };
};