var gulp = require('gulp');
var compress_images = require('compress-images');

// We will be compressing images [jpg] with two algorithms, [webp] and [jpg];
// gulp compress_images
gulp.task('compress_images', function() {
    //[jpg] ---to---> [webp]
    compress_images('img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}', 'img/', {compress_force: false, statistic: true, autoupdate: true}, false,
        {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
        {png: {engine: 'pngquant', command: ['--quality=20-50']}},
        {svg: {engine: 'svgo', command: '--multipass'}},
        {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}},
        function(error, completed, statistic){
            console.log('-------------');
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log('-------------');
        });
});