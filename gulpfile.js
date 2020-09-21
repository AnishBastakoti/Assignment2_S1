const gulp = require('gulp');
const yargs = require('yargs');
const plugins = require('gulp-load-plugins')();
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const args = yargs.argv;

gulp.task('js', () => {
	return browserify({entries: 'src/js/start.js', debug: !args.prod})
		.transform('babelify', {presets: ['babel/present-env']})
		.bundle()
		.pipe(source('start.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./build/'));
});

gulp.task('sass', () => {
	return gulp.src('src/styles/style.scss')
//		.pipe(plugins.combineMq())
//		.pipe(plugins.csso())
		.pipe(gulp.dest('./build/'));
});

gulp.task('views', () => {
	return gulp.src('src/views/**/*')
		.pipe(gulp.dest('./build/'));
});

gulp.task('img', () => {
	return gulp.src('src/img/*')
		.pipe(gulp.dest('./build/img/'));
});

gulp.task('watch', (done) => {
	gulp.watch('src/styles/*', ['sass']);
	gulp.watch('src/views/*', ['views']);
	gulp.watch('src/js/*', ['js']);
	gulp.watch('src/img/*', ['img']);
	done();
});

gulp.task('default', gulp.parallel('views', 'sass', 'js', 'img'));
