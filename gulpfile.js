var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];
// Gulp task to minify css files
gulp.task('css', function() {
   return gulp.src('css/*.css')
            .pipe(sass())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist/css'));
});

// Gulp task to minify js files
gulp.task('script', function() {
  return gulp.src('js/*.js')
              .pipe(uglify())
              .pipe(gulp.dest('dist/js'));
});


// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['./*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
});

//Do everything once!
gulp.task('default', function(){
  gulp.watch('css/*.css', gulp.series('css')),
  gulp.watch('./*.html', gulp.series('pages')),
  gulp.watch('js/*.js', gulp.series('script'));
  return
});