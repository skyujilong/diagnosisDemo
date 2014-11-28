/**
 * Created by lsc on 2014/11/28.
 */
console.log('测试内容启动');
require(['./app','Backbone'],function(App,Backbone){

    app.addInitializer(function(){
        Backbone.history();
    });
    app.start();
});