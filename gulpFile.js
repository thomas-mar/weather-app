var gulp = require('gulp');
var del = require('del');

gulp.task('default', gulp.series(clean,copyIndex));

function clean(done) {
    del(['dist']);
    done();  
}

function copyIndex(done) {
    return gulp.src('./src/app/**/*.ts').pipe(gulp.dest('./dist',{overwrite: true}))

}

