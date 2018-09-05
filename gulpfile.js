var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
var pump = require('pump');

gulp.task('css', function () {
	return gulp.src
    ([
      'node_modules/bulma/css/bulma.css',
      'src/custom.css'
    ])
    .pipe(concat('custom.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function () {
   gulp.watch('src/*.css', ['css']);
});

gulp.task('default', ['css']);
