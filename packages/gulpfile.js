const gulp = require('gulp');
const uglify = require('gulp-uglify');
const terser = require('gulp-terser');

gulp.task('minify', function () {
  return gulp
    .src(['dist/*', '!dist/*.d.ts'])
    .pipe(uglify())
    .pipe(
      terser({
        compress: {
          drop_console: true,
        },
        output: {
          beautify: false,
          comments: false,
        },
      })
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(['minify']));
