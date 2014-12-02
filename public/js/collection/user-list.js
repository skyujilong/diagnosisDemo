/**
 * Created by lsc on 2014/12/1.
 */
define(['backbone','model/user','jquery','util/ajax'],function(Backbone,User,$,requestData){
    var UserList = Backbone.Collection.extend({
        model:User
    });
    var userList = new UserList();
    requestData({
        url:'/getUserList'
    }).then(function(data){
        userList.reset(data.results);
        console.log(userList.toJSON());
    });
    return userList;
});