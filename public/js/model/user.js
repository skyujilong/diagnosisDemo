/**
 * Created by lsc on 2014/11/29.
 */
define(['backbone'],function(Backbone){
    return Backbone.Model.extend({
        initialize:function(opt){
            this.set({
                name:opt.name,
                sex:opt.sex,
                age:opt.age
            })
        }
    });
});
