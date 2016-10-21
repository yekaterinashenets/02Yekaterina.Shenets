'use strict';

// FRAMEWORK
var framework={
Get:{
	byId: function(id){
		return document.getElementById(id);
	},
	byTag:function(tag){
		return document.getElementsByTagName(tag);
	},
	byClass:function(className){
		return document.getElementsByClassName(className);
	},
	byName:function(name){
		return document.getElementsByName(name);
	},
	querySelector:function(querySelector){
		return document.querySelector(querySelector);
	},
	randomNumber:function(min,max){
		return min+(max-min)*Math.random();
	}
},

create:function(el){
	return document.createElement(el);
},

append:function (el, target){
	return target.appendChild(el);
},

prepend:function (el, target){
	return target.insertBefore(el, target.firstChild);
},

remove:function (el){
	return el.parentNode.removeChild(el);
},

replace:function (el, target){
	return target.parentNode.replaceChild(el, target);
},

isEmpty:function (el){
	if(el.childNodes.length==0)
		return "empty";
	else
		return "not empty";
},
copy: function(el,target){
	return target.appendChild(el.cloneNode());
},
copyPre: function(el, target){
	return target.insertBefore(el.cloneNode(), target.firstChild);
}

}
  //  /FRAMEWORK

var display=framework.Get.byId('display');
var one=framework.Get.byId('one');
one.addEventListener("click", function(){
	display.value+=1;
});
var two=framework.Get.byId('two');
two.addEventListener("click", function(){
	display.value+=2;
});
var three=framework.Get.byId('three');
three.addEventListener("click", function(){
	display.value+=3;
});
var four=framework.Get.byId('four');
four.addEventListener("click", function(){
	display.value+=4;
});
var five=framework.Get.byId('five');
five.addEventListener("click", function(){
	display.value+=5;
});
var six=framework.Get.byId('six');
six.addEventListener("click", function(){
	display.value+=6;
});
var seven=framework.Get.byId('seven');
seven.addEventListener("click", function(){
	display.value+=7;
});
var eight=framework.Get.byId('eight');
eight.addEventListener("click", function(){
	display.value+=8;
});
var nine=framework.Get.byId('nine');
nine.addEventListener("click", function(){
	display.value+=1;
});
var zero=framework.Get.byId('zero');
zero.addEventListener("click", function(){
	display.value+=0;
});
var dot=framework.Get.byId('dot');
dot.addEventListener("click", function(){
	display.value+='.';
});
var add=framework.Get.byId('add');
add.addEventListener("click", function(){
	display.value+='+';
});
var sub=framework.Get.byId('sub');
sub.addEventListener("click", function(){
	display.value+='-';
});
var mul=framework.Get.byId('mul');
mul.addEventListener("click", function(){
	display.value+='*';
});
var div=framework.Get.byId('div');
div.addEventListener("click", function(){
	display.value+='/';
});
var clear=framework.Get.byId('clear');
clear.addEventListener("click", function(){
	display.value='';
});
var do_it=framework.Get.byId('do_it');
do_it.addEventListener("click", function(){
	display.value=eval(display.value);
});


	








