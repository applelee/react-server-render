const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('watchComponent',() => {
  gulp.watch('./src/components/*')
    .on('change',(e) => {
      gulp.src(e.path)
        .pipe(babel())
        .pipe(gulp.dest('./server/components'))
    })
})

if(process.env.NODE_ENV === 'transComponent'){
  gulp.task('default',['watchComponent'])
}
