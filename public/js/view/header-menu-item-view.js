/**
 * Created by lsc on 2014/11/29.
 */
define(['marionette','template','jquery'],function(Marionette,template,$){
    return Marionette.ItemView.extend({
        ui:{
            $li:'li'
        },
        template:function(data){
            return template('head/header',data);
        },
        events:{
            'click a':'changeBackColor'
        },
        changeBackColor:function(){
            this.ui.$li.closest('#header').find('.active').removeClass('active');
            this.ui.$li.addClass('active');
        },
        //直接检测model的变化
        modelEvents:{
            'change':'modelChange'
        },
        modelChange : function(){
            this.render();
        }
    });
});