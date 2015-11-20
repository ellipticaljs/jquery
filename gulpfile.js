var gulp=require('gulp'),
    fs = require('fs-extra'),
    concat=require('gulp-concat'),
    uglify = require('gulp-uglify'),
    BUILD_NAME='jquery.js',
    MIN_NAME='jquery.min.js',
    REPO_NAME='elliptical jquery',
    DIST='./dist';


gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp build|minify"');
});

gulp.task('build',function(){
   console.log('not implemented');
});

gulp.task('minify',function(){
    concatFileStream(DIST + '/jquery.js',DIST,MIN_NAME);
});

function srcStream(src){
    if(src===undefined) src=BUILD_JSON;
    return gulp.src(src);
}

function concatStream(name,src){
    if(src===undefined) src=BUILD_JSON;
    return srcStream(src)
        .pipe(concat(name))
}

function fileStream(src,dest){
    gulp.src(src)
        .pipe(gulp.dest(dest));
}

function concatFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(gulp.dest(dest));
}

function minFileStream(src,dest,name){
    gulp.src(src)
        .pipe(concat(name))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}
