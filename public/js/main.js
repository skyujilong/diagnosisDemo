/**
 * Created by lsc on 2014/11/28.
 */
console.log('测试内容启动');
require([
    './app',
    'backbone',
    'server/header-server',
    'router/router',
    'jquery',
    'view/diagonsis-layout',
    'domReady!'
],function(app,Backbone,HeadView,Router,$,diagonsisLayout){

    app.addRegions({
        header:'#header',
        innerCotent:'.inner-content'
    });
    new Router();
    app.addInitializer(function(){
        //show不同的view  一个region对应多个不同的view
        this.header.show(HeadView);
        console.log(diagonsisLayout);
        this.innerCotent.show(diagonsisLayout);
        Backbone.history.start();
    });
    //初始化
    app.header.on('show',function(){
        $('#header').find('li:eq(0)').addClass('active');
    });
    app.start();
});