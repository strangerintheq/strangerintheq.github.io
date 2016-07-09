var gulp = require('gulp');
var pump = require('pump');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-cssnano');
var htmlmin = require("gulp-htmlmin");
var rename = require("gulp-rename");
var webserver = require('gulp-webserver');

var buildDirectory = '.';
var tasks = [];

task('js', [
    browserify('./src/js/index.js').bundle(),
    source('index.js'),
    // gulp.dest(buildDirectory),
    // rename({ suffix: '.min' }),
    // buffer(),
    // uglify(),
    gulp.dest(buildDirectory)
]);

task('css', [
    gulp.src('./src/css/*.css'),
    concatCss("style.css"),
    // gulp.dest(buildDirectory),
    // rename({ suffix: '.min' }),
    // minifyCss(),
    gulp.dest(buildDirectory)
]);

task('html', [
    gulp.src('./src/html/**'),
    gulp.dest(buildDirectory)
]);


gulp.task('default', tasks, function () {
    gulp.src('..').pipe(webserver({
        livereload: true,
        port: 80,
        fallback: 'index.html'
    }));
});

function task(name, funcs) {
    gulp.task(name, function (cb) {
        pump(funcs, cb);
    });
    gulp.watch(name + '/**', function () {
        gulp.run(name);
    });
    tasks.push(name);

}


