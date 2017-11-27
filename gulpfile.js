var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
gulp.task('css', function() {
    var plugins = [
         require('postcss-import')(),
        require('postcss-mixins')(),
        require('postcss-for')(),
        require('postcss-simple-vars')({silent: true}), 
        require('postcss-nested')(),
        require('postcss-extend-rule')(),
        cssnext({
            autoprefixer: {
                browsers: ['IE >= 9']
            }
        }),


    ];
    return gulp.src('src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist'));
});
gulp.task('auto_postcss',function(){
    gulp.watch('src/*.css',['css']);
}) 