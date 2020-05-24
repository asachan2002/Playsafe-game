var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*', 'del', 'merge2'], 
    scope: ['dependencies', 'devDependencies', 'peerDependencies'], 
    replaceString: /^gulp(-|\.)/, 
    camelize: true, 
    lazy: true, 
    maintainScope: true, 
    config: require('./gulp-tasks/package.json')
});

function task(name) {
    return require('./gulp-tasks/' + name)(gulp, plugins);
}

gulp.task('copy-html-to-dist', task('copy-html-to-dist'));
gulp.task('clean-build', task('clean-build'));
gulp.task('copy-html-to-dist', task('copy-html-to-dist'));
gulp.task('build-local', task('build-local'));
gulp.task('compile-debug', task('compile-debug'));
gulp.task('copy-assets-to-dist', task('copy-assets-to-dist'));
  gulp.task('copy-framework-to-dist', task('copy-framework-to-dist'));
gulp.task('default', function () {
});
