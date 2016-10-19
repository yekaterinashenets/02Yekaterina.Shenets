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

var names = ["Анна", "Оксана", "Валерия", "Ирина", "Марина"];
var cities=["Минска", "Гомеля", "Гродно", "Могилёва", "Бреста", "Солигорска", "Жлобина"];
var items=["стул IKEA"," деревянный стол", "мышка для компьютера", "клавиатура", "iphone 7S", "одеяло", "пылесос Samsung", "аквариум"];
var container=framework.Get.byId("container");
window.setInterval(function(){
	var div=framework.create("div");
	div.innerHTML=names[Math.floor(Math.random() * names.length)]+" из "+cities[Math.floor(Math.random() * cities.length)]+" заказала "+Math.floor(1 + Math.random() * 10)+" шт. товара: " +items[Math.floor(Math.random() * items.length)];
	container.appendChild(div);
;}
, 2500)









