/**
 * Created by lsc on 2014/11/28.
 */
console.log('测试内容启动');
require(['./app','backbone','server/header-server','router/router','jquery'],function(app,Backbone,HeadView,Router,$){

    app.addRegions({
        header:'#header',
        innerCotent:'.inner-content'
    });
    new Router();
    app.addInitializer(function(){
        //show不同的view  一个region对应多个不同的view
        this.header.show(HeadView);
        Backbone.history.start();
    });
    //初始化
    app.header.on('show',function(){
        $('#header').find('li:eq(0)').addClass('active');
    });
    app.start();
});