/**
 * Created by lsc on 2014/11/29.
 */
define(['backbone','model/head-menu'],function(Backbone,Menu){
    return Backbone.Collection.extend({
        model:Menu
    });
});
