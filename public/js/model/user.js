/**
 * Created by lsc on 2014/11/29.
 */
define(['backbone'],function(Backbone){
    return Backbone.Model.extend({
        default:{
            name:'',
            sex:'',
            age:''
        }
    });
});
