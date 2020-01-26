var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
var gulpCopy = require('gulp-copy');
var imageResize = require('gulp-image-resize');
var pump = require('pump');

const { series } = require('gulp');
const { src, dest } = require('gulp');

function css() {
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
}

function js(cb) {
	pump([
			gulp.src
			([
				'src/copypastesubscribeformlogic.js',
				'src/custom.js'
			]),
			uglify(),
			concat('bundle.min.js'),
			gulp.dest('assets/js')
		],
		cb
	);
}

function mastodon(cb) {
	pump([
			gulp.src
			([
				'node_modules/vue/dist/vue.min.js',
				'node_modules/moment/min/moment.min.js',
				'src/mastodon.js'
			]),
			uglify(),
			concat('mastodon.min.js'),
			gulp.dest('assets/js')
		],
		cb
	);
}

function contact(cb) {
	pump([
			gulp.src
			([
				'node_modules/vue/dist/vue.min.js',
				'node_modules/axios/dist/axios.min.js',
				'node_modules/buefy/dist/buefy.min.js',
				'node_modules/vee-validate/dist/vee-validate.min.js',
				'src/utils/jekyll_formmixin/form.js',
				'src/contact.js'
			]),
			uglify(),
			concat('contact.min.js'),
			gulp.dest('assets/js')
		],
		cb
	);
}

function packages(cb) {
	pump([
			gulp.src
			([
				'src/packages.js'
			]),
			uglify(),
			concat('packages.min.js'),
			gulp.dest('assets/js')
		],
		cb
	);
}

function images() {
	return gulp.src('src/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/images'))
}

function imagesResize() {
  return gulp.src('src/images/central-management/*')
		 .pipe(imageResize({
			 width : 675,
			 height : 480,
			 crop : true,
			 gravity : 'North',
			 upscale : false
		 }))
		 .pipe(imagemin())
		 .pipe(gulp.dest('assets/images/central-management/thumbs'));
}

function imagesCoverBg() {
  return gulp.src('src/images/covers/*')
		 .pipe(imageResize({
			 width : 1920,
			 height : 500,
			 crop : true,
			 upscale : false
		 }))
		 .pipe(imagemin())
		 .pipe(gulp.dest('assets/images/covers/bg'));
}

function imagesCoverTiny() {
  return gulp.src('src/images/covers/*')
		 .pipe(imageResize({
			 width : 500,
			 height : 140,
			 crop : true,
			 upscale : false
		 }))
		 .pipe(imagemin())
		 .pipe(gulp.dest('assets/images/covers/tiny'));
}

function applicationsThumb() {
  return gulp.src('src/images/applications/*')
		 .pipe(imageResize({
			 width : 800,
			 upscale : false
		 }))
		 .pipe(imagemin())
		 .pipe(gulp.dest('assets/images/applications/thumb'));
}

function fonts() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulpCopy('assets/fonts', { prefix: 2 }))
		.pipe(gulp.dest('assets/fonts'))
}

function watch() {
   gulp.watch('src/*.css', ['css']);
	 gulp.watch('src/*.js', ['js', 'packages']);
	 gulp.watch('src/images/**/*.{jpg,png,svg}', ['images']);
}

exports.default = series(css, js, contact, mastodon, packages, images, imagesResize, imagesCoverBg, imagesCoverTiny, applicationsThumb, fonts);

exports.css = series(css);

exports.js = series(js, contact, packages, mastodon)
