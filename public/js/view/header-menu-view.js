/**
 * Created by lsc on 2014/11/29.
 */
define([
    'marionette',
    'view/header-menu-item-view'
],function(Marionette,ItemView){
    return Marionette.CollectionView.extend({
        initializer:function(collection){
            this.collection = collection;
        },
        childView:ItemView
    });
});
