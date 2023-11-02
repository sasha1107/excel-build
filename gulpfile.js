const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minify', function () {
  return gulp.src('dist/lib/*.js').pipe(uglify()).pipe(gulp.dest('dist/lib'));
});

gulp.task('default', gulp.series('minify'));
