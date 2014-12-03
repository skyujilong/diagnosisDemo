/**
 * Created by lsc on 2014/12/1.
 */
define([
    'marionette',
    'template',
    'view/edit-user-view'
//    'view/diagnosis-layout'
],function(Marionette,template,EditUserView){
    return Marionette.ItemView.extend({
        tagName:'tr',
        template:function(data){
            return template('body/user',data);
        },
        events:{
            'click input:eq(0)' : 'edit',
            'click input:eq(1)' : 'del'
        },
        edit:function(){
            //编辑
            this.triggerMethod('showEditor',this.model);
            //TODO 在layout中监听showEditor
        },
        del:function(){
            //删除
            this.model.destory();
        }
    });
});
