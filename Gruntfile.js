module.exports = function (grunt) {

    // 配置插件任务
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 20000,
                    base: './',
                    open: true,
                    keepalive: true,
                    hostname: 'localhost'
                }
            }
        }
    });

    // 加载需要的插件
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 注册Grunt任务
    grunt.registerTask('default', ['connect']);

};