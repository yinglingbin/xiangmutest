const gulp = require('gulp');
const html = require('gulp-minify-html');
const css = require('gulp-clean-css');
//sass
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const plugins = require('gulp-load-plugins')();
//
const script = require('gulp-uglify');

//
const bable = require('gulp-babel');
const bablecore = require('babel-core');
const es2015 = require('babel-preset-es2015');

const imagemin = require('gulp-imagemin');

const watch = require('gulp-watch');




gulp.task('copyfile',()=>{
    return gulp.src('src/thirdplugins/*.js')
        .pipe(gulp.dest('dist/thirdplugins'));
})

gulp.task('uglifyhtml',()=>{
    return gulp.src('src/*.html')
        .pipe(html())
        .pipe(gulp.dest('dist/'))
})

gulp.task('uglifycss',()=>{
    return gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('dist/css'))
})

// gulp.tast('compilesass',()=>{
//     return gulp.src('src/sass/*.scss')
//         .pipe(plugins.sourcemaps.init())
//         .pipe(plugins.sass({
//             outputStyle: 'compressed'
//         }))
//         .pipe(plugins.sourcemaps.write('.'))
//         .pipe(gulp.dest('dist/css'))
// })

gulp.task('uglifyjs',()=>{
    return gulp.src('src/script/*.js')
        .pipe(bable({
            presets: ['es2015']
        }))
        .pipe(script())
        .pipe(gulp.dest('dist/script'))
})

gulp.task('uglifyimg',()=>{
    return gulp.src('src/img/*.{jpg,png,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})

gulp.task('default',()=>{
    watch(['src/thirdplugins/*.js','src/*.html','src/css/*.css','src/script/*.js','src/img/*.{jpg,png,gif}']
    ,gulp.parallel('copyfile','uglifyhtml','uglifycss','uglifyjs','uglifyimg'))

})