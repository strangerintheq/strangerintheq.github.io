var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var pump = require('pump');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-cssnano');
var htmlmin = require("gulp-htmlmin");
var rename = require("gulp-rename");
var webserver = require('gulp-webserver');
var inject = require('gulp-inject');

var buildDirectory = './build';
var tasks = [];

task('js', [
    browserify('./src/js/main.js').bundle(),
    source('app.js'),
    gulp.dest(buildDirectory),
    rename({ suffix: '.min' }),
    buffer(),
    uglify(),
    gulp.dest(buildDirectory)
]);

task('css', [
    gulp.src('src/css/**'),
    concatCss("app.css"),
    gulp.dest(buildDirectory),
    rename({ suffix: '.min' }),
    minifyCss(),
    gulp.dest(buildDirectory)
]);

task('html', [
    gulp.src('src/html/main.html'),
    gulp.dest(buildDirectory)
    // rename({ suffix: '.min' }),
    // htmlmin({collapseWhitespace: true}),
    // gulp.dest(buildDirectory)
]);

task('resources', [
    gulp.src('src/resources/**'),
    gulp.dest(buildDirectory)
]);

gulp.task('default', tasks, function () {
    gulp.src('./build').pipe(webserver({
        livereload: true,
        port: 80,
        fallback: 'main.html'
    }));
});

function task(name, funcs) {
    gulp.task(name, function (cb) {
        pump(funcs, cb);
    });
    gulp.watch('src/' + name + '/**', function () {
        gulp.run(name);
    });
    tasks.push(name);

}


