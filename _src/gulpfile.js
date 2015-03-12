var gulp = require('gulp');

// Styles
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');

//Scripts
var concat = require('gulp-concat');

// Images
var imagemin = require('gulp-imagemin');
  // var pngcrush = require('imagemin-pngcrush');

var paths = {
  scripts: ['js/*.js'],
  images: ['imgage/*','../imgs/*/*',],
  styles: ['css/*.scss', 'css/patterns/*.scss']
};




gulp.task('sass', function () {
    gulp.src(paths.styles)
        .pipe(sass({style: 'compressed'}))
        .pipe(prefix(["last 1 version", "> 2%"],{map: false }))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../assets/css/'));
});


gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(concat('javascript.js'))
    .pipe(gulp.dest('../assets/js'))
});


// gulp.task('images', function () {
//     return gulp.src(paths.images)
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngcrush()]
//         }))
//         .pipe(gulp.dest('dist'));
// });

gulp.task('watch', function () {
    gulp.watch((paths.styles), ['sass']);
    gulp.watch((paths.scripts), ['scripts']);
});

gulp.task('default', ['watch']);

