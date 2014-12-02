/**
 * Created by lsc on 2014/12/1.
 */
//定义diagnosis
define([
    'marionette',
    'template',
    'view/user-list-view',
    'view/edit-user-view',
    'collection/user-list'
],function(Marionette,template,UserListView,EditUserView,userList){
    return Marionette.LayoutView.extend({
        template:function(){
            return template('body/diagnosis-index');
        },
        regions:{
            editView:'#edit-user',
            userList:'#user-info'
        },
        events:{
            'click #create-new-user':'createNewUser'
        },
        createNewUser : function(){
            this.editView.show(new EditUserView({
                collection:userList
            }));
        },
        onRender:function(){
            this.userList.show(new UserListView({
                collection:userList
            }));
        }
    });
});