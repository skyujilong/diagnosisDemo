/**
 * Created by lsc on 2014/11/28.
 */
console.log('测试内容启动');
require(['./app','backbone','server/header-server'],function(app,Backbone,HeadView){

    app.addRegions({
        header:'#header',
        innerCotent:'.inner-content'
    });

    app.addInitializer(function(){
        this.header.show(HeadView);
        Backbone.history.start();
    });
    app.start();
});