/*TMODJS:{"version":1,"md5":"5be84a7779ec4dd9ef36858e5b306308"}*/
template('body/user',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,index=$data.index,name=$data.name,sex=$data.sex,age=$data.age,$out='';$out+='<td>';
$out+=$escape(index);
$out+='</td> <td>';
$out+=$escape(name);
$out+='</td> <td>';
$out+=$escape(sex);
$out+='</td> <td>';
$out+=$escape(age);
$out+='</td> <td> <input type="button" value="编辑"> <input type="button" value="删除"> </td>';
return new String($out);
});