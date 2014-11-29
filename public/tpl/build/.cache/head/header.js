/*TMODJS:{"version":18,"md5":"4e430091940502888bb13a3249aa3fa1"}*/
template('head/header',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,isChecked=$data.isChecked,$escape=$utils.$escape,url=$data.url,name=$data.name,$out='';if(isChecked == 1){
$out+=' <li class="active"><a href="';
$out+=$escape(url);
$out+='">';
$out+=$escape(name);
$out+='</a></li> ';
}else{
$out+=' <li><a href="';
$out+=$escape(url);
$out+='">';
$out+=$escape(name);
$out+='</a></li> ';
}
return new String($out);
});