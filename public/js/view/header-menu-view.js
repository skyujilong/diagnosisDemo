/**
 * Created by lsc on 2014/11/29.
 */
define([
    'marionette',
    'view/header-menu-item-view',
    'underscore',
    'jquery'
],function(Marionette,ItemView,_,$){
    return Marionette.CollectionView.extend({
        childView:ItemView
    });
});
