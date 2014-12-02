/**
 * Created by lsc on 2014/12/1.
 */
define([
    'marionette',
    'template'
],function(Marionette,template){
    return Marionette.ItemView.extend({
        tagName:'tr',
        template:function(data){
            return template('body/user',data);
        }
    });
});
