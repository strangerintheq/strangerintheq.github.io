var TaskBuilder = require('gulp-task-builder');

TaskBuilder.config.dest = './';

TaskBuilder.task('app')
    .webpack('scripts/app.js', false)
    //.removeEmptyLines()
    .dest();

TaskBuilder.task('styles')
    .src('styles/**')
    .stylus()
    .concatCss('app.css')
    .dest();

TaskBuilder.task('resources')
    .src('../node_modules/cesium/Build/CesiumUnminified/**')
    .dest();


TaskBuilder
    .task('default')
    .depends([
        'app',
        'styles',
        'resources'
    ])
    .src('html/index.html')
    // .fileInclude()
    .dest();
