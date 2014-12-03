/**
 * Created by lsc on 2014/12/1.
 */
define([
    'marionette',
    'template',
    'collection/user-list',
    'view/user-view',
    'jquery'
],function(Marionette,template,UserList,UserView,$){
    return Marionette.CompositeView.extend({
        initialize:function(){
            this.listenTo(this.collection,'reset',this.render,this);
            this.listenTo(this.collection,'remove',this.render,this);
        },
        template:function(data){
            return template('body/user-list',data);
        },
        childView:UserView,
        childViewContainer:'tbody',
        childViewOptions:function(model,index){
            model.set('index',index);
        }
    });
});