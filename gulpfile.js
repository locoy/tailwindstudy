var gulp = require('gulp');
var run = require('gulp-run');
var chalk = require('chalk');

gulp.task('default', function () {

  // watch for javascript file (*.js) changes, in current directory (./)
  gulp.watch('./public/*.html', function () {

    console.log(chalk.red('watch file changed,rebuild css'));
    // run an npm command called `test`, when above js file changes
    return run('npm run build').exec();

    // uncomment below, and comment above, if you have problems
    // return run('echo Hello World').exec();
  });
});










// const { src, dest, symlink, watch, task, series, parallel } = require('gulp');
// const chalk = require('chalk')
// var shell = require('gulp-shell');

// function a(cb) {
//     cb()
// }
// function b(cb) {
//     cb()
// }
// function c(cb) {
//     cb()
// }
// function createDist(){ // 生成dist文件（src、dest/symlink使用）
//     return src('public/*.html');
//     //.pipe(symlink('dist/'));
// }
// const tasks = [createDist, parallel([a, b, c])];
// function watching() {
//     console.log(chalk.red('正在监听文件...'))

//     const watcher = watch(['public/*.html']);
//     watcher.on('change', function(path, stats) {
//         console.log('更新：1', path, stats);

//         shell('npm run build');
//         console.log('npm run build完成');
        
//     });
//     watcher.on('add', function(path, stats) {
//         console.log('更新：2', path, stats);

//         shell('npm run build');
//         console.log('npm run build完成');
//     });
// }
// // 以上都是在定义task
// tasks.push(watching);
// function seriesTask() { // 将所有task顺序定为串行执行
//     return series(tasks)();
// }
// task('default', seriesTask); // 运行gulp执行的task