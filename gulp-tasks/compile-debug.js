module.exports = function (gulp, plugins,config) {
    return function() {
        var project = plugins.typescript.createProject("tsconfig.json", {
            "outDir": "build/dist",
            "outFile": "lib/game.js"
        });
        var tsResult = project.src()
            .pipe(plugins.sourcemaps.init())
            .pipe(project());
        return plugins.merge2([
            tsResult.dts
                .pipe(gulp.dest('build/dist')),
            tsResult.js
                .pipe(plugins.sourcemaps.write('maps'))
                .pipe(gulp.dest('build/dist'))
        ]);
    };
};