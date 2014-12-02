/**
 * Created by lsc on 2014/12/1.
 */
define([
    'marionette',
    'template',
    'model/user',
    'jquery'
],function(Marionette, template, User, $){
    return Marionette.ItemView.extend({
        template:function(){
            return template('body/edit-user',this.model);
        },
        ui:{
            $userInfo : '#user-info'
        },
        events:{
            'click .sure':'save',
            'click .cancel':'cancel'
        },
        save:function(){
            var $userInfo = this.ui.$userInfo;
            if(this.model){
                this.model.set({
                    name:$userInfo.find('input[name="name"]').val(),
                    age:$userInfo.find('input[age="age"]').val(),
                    sex:$userInfo.find('input[sex="sex"]').val()
                });
            }else{
                this.collection.add(new User({
                    name:$userInfo.find('input[name="name"]').val(),
                    age:$userInfo.find('input[age="age"]').val(),
                    sex:$userInfo.find('input[sex="sex"]').val()
                }));
            }
            this.cancel();
        },
        cancel:function(){
            this.destroy();
        },
        onRender:function(){
            $('#edit-user').show();
        },
        onDestroy:function(){
            $('#edit-user').hide();
        }
    });
});
