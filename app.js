/**
 * Created by lsc on 2014/11/28.
 */
var express = require('express');
var app = express();
var path = require('path');
app.set('views', path.join(__dirname, '/view'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '/public')));


app.get('/getFirstData', function(req, res){
    res.json(200,{results:{
        name:'yjl',
        age:25
    }})
});
app.get('/getSecondData',function(req,res){
    res.json(200,{results:{
        name:'qk',
        age:27
    }});
});
app.get('/',function(req,res){
    res.render('index.jade');
});
app.listen(3000);