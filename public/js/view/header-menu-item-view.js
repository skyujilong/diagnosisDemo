/**
 * Created by lsc on 2014/11/29.
 */
define(['marionette','template'],function(Marionette,template){
    return Marionette.ItemView.extend({
        tagName:'li',
        template:function(data){
            console.log(data);
            return template('head/header',data);
        },
        events:{
            'click a':'changeBackColor'
        },
        changeBackColor:function(){
            if(this.model == this.collection.findWhere({isChecked:1})){
                return;
            }
            this.collection.findWhere({isChecked:1}).set('isChecked',0);
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