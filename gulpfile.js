var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
var gulpCopy = require('gulp-copy');
var pump = require('pump');

gulp.task('css', function () {
	return gulp.src
    ([
      'node_modules/buefy/dist/buefy.min.css',
	    'node_modules/bulma-timeline/dist/css/bulma-timeline.min.css',
	    'src/panther.css',
      'src/custom.css'
    ])
    .pipe(concat('custom.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function (cb) {
	pump([
				gulp.src
				([
					'src/copypastesubscribeformlogic.js',
					'node_modules/vue/dist/vue.js',
					'node_modules/buefy/dist/buefy.min.js',
					'node_modules/axios/dist/axios.min.js',
					'node_modules/vee-validate/dist/vee-validate.js',
					'src/utils/jekyll_formmixin/form.js',
					'node_modules/moment/moment.js',
					'src/custom.js'
				]),
				concat('bundle.min.js'),
				uglify(),
				gulp.dest('assets/js')
			],
			cb
	);
});

gulp.task('packages', function (cb) {
	pump([
				gulp.src
				([
					'src/packages.js'
				]),
				concat('packages.min.js'),
				uglify(),
				gulp.dest('assets/js')
			],
			cb
	);
});

gulp.task('images', () =>
		gulp.src('src/images/**/*')
				.pipe(imagemin())
				.pipe(gulp.dest('assets/images'))
);

gulp.task('fonts', () =>
		gulp.src('src/fonts/**/*')
				.pipe(gulpCopy('assets/fonts', { prefix: 2 }))
				.pipe(gulp.dest('assets/fonts'))
);

gulp.task('watch', function () {
   gulp.watch('src/*.css', ['css']);
	 gulp.watch('src/*.js', ['js', 'packages']);
	 gulp.watch('src/images/**/*.{jpg,png,svg}', ['images']);
});

gulp.task('default', ['css', 'js', 'packages', 'images', 'fonts']);
