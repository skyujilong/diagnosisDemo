/*TMODJS:{"version":8,"md5":"d32f3643f9a458403d173e9ce4415a8c"}*/
template('body/edit-user',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,name=$data.name,sex=$data.sex,age=$data.age,$out='';$out+=' <table id="user-info" style="width:100%"> <tr> <td>姓名：</td> <td><input name="name" type="text" value="';
$out+=$escape(name);
$out+='"></td> </tr> <tr> <td>性别：</td> <td><input name="sex" type="text" value="';
$out+=$escape(sex);
$out+='"></td> </tr> <tr> <td>年龄：</td> <td><input name="age" type="text" value="';
$out+=$escape(age);
$out+='"></td> </tr> <tr> <td rowspan="2"> <input class="sure" type="button" value="确定"> <input class="cancel" type="button" value="取消"> </td> </tr> </table> ';
return new String($out);
});