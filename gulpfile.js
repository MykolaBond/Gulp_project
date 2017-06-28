var gulp = require('gulp');


gulp.task('mytask',function(){
	console.log('Hello, i am gulp');
});
var x = 3;
var y = 4;
gulp.task('sum',function(){
	var z = x + y;
	console.log (z);
});
gulp.task('default',['mytask','sum']);