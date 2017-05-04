const gulp = require('gulp')
const babel = require('gulp-babel')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')


gulp.task('transComponent',() => {
  gulp.watch('./src/components/*')
    .on('change',(e) => {
      console.log(e.path)
      gulp.src(e.path)
        .pipe(babel())
        .pipe(gulp.dest('./server/components'))
    })
})

gulp.task('dev_browserify',() => {
  browserify('./client/main.js',{debug:true})
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    // .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('./server/public/js'))
})

gulp.task('pro_browserify',() => {
  browserify('./client/main.js',{debug:true})
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./server/public/js'))
})

//watch js
gulp.task('watchjs',() => {
  gulp.watch('./client/*',['dev_browserify'])
})

if(process.env.NODE_ENV === 'transComponent'){
  gulp.task('default',['transComponent'])
}
else if(process.env.NODE_ENV === 'development'){
  gulp.task('default',['dev_browserify','watchjs'])
}
else if(process.env.NODE_ENV === 'production'){
  gulp.task('default',['pro_browserify'])
}
