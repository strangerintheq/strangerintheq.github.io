
var Task = require('gulp-task-builder');

new Task('nuga-best-1')
    .src('projects/nuga-best/v1/src/index.html')
    .fileinclude()
    .dest('projects/nuga-best/v1');

new Task('nuga-best-2')
    .src('projects/nuga-best/v2/src/index.html')
    .fileinclude()
    .dest('projects/nuga-best/v2');

new Task('nuga-best-3')
    .src('projects/nuga-best/v3/src/index.html')
    .fileinclude()
    .dest('projects/nuga-best/v3');

new Task('nuga-best-4')
    .src('projects/nuga-best/v4/src/index.html')
    .fileinclude()
    .dest('projects/nuga-best/v4');

new Task('default')
    .depends([
        'nuga-best-1', 'nuga-best-2', 'nuga-best-3', 'nuga-best-4'
    ])
    .src('home/src/*.html')
    .fileinclude()
    .dest('home');

