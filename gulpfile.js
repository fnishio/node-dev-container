var gulp = require('gulp');
var coffee = require('gulp-coffee');

var dirs = {
  src: 'src',
  dest: 'dest',
};

gulp.task('coffee', function() {
  gulp.src(dirs.src + '/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest(dirs.dest))
});

gulp.task('build', ['coffee']);

gulp.task('default', function() {
  gulp.watch(dirs.src, ['build']);
});
