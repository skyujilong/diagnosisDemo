/*TMODJS:{"version":22,"md5":"2e2287a540ed05ead0922dc4a8beaa00"}*/
template('head/header',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,url=$data.url,name=$data.name,$out='';$out+='<li><a href="';
$out+=$escape(url);
$out+='">';
$out+=$escape(name);
$out+='</a></li>';
return new String($out);
});