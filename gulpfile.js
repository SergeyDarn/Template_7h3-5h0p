const gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    ejs = require('gulp-ejs'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    gulpIf = require('gulp-if-else'),
    isProduction = process.env.NODE_ENV === 'production';

gulp.task('browserSync', () => {
    browserSync.create();

    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        files: [
            'dist/**/*.*'
        ]
    });
});

gulp.task('styles', () => {
    gulp.src('src/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(autoprefixer())
        .pipe(gulpIf(isProduction, cleanCSS))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', () => {
    gulp.src('src/img/**/*.*')
        . pipe(gulpIf(isProduction, imagemin))
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('svg', () => {
    gulp.src('src/img/**/*.svg')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('js', () => {
    gulp.src(['src/js/**/*.*', '!src/js/property-selector.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));

    gulp.src('src/js/property-selector.js')
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', () => {
    gulp.src('src/index.ejs')
        .pipe(ejs().on('error', gutil.log))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('src/less/**/*.less', ['styles']);
    gulp.watch('src/**/*.ejs', ['html']);
    gulp.watch('src/img/**/*.*', ['img']);
    gulp.watch('src/js/**/*.*', ['js']);
});

gulp.task('default', ['styles', 'html', 'img', 'js', 'watch', 'browserSync']);
gulp.task('prod', ['styles', 'html', 'img', 'js']);

