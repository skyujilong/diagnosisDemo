
define([
    'backbone',
    'marionette',
    'collection/head-menu-list',
    'model/head-menu',
    'view/header-menu-view'
],function(Backbone,Marionette,MenuList,MenuModel,MenuView){

    var menuList = new MenuList();
    menuList.add(new MenuModel({
        name:'诊断',
        url:'#/diagnosis',
        isChecked:1
    }));
    menuList.add(new MenuModel({
        name:'题库',
        url:'#/questions',
        isChecked:0
    }));
    menuList.add(new MenuModel({
        name:'考试',
        url:'#/exams',
        isChecked:0
    }));

    return new MenuView({
        collection:menuList
    });

});