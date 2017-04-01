
var Task = require('gulp-task-builder');

new Task('default')
    .src('node_modules/coco-core/bin/**')
    .dest('./');

