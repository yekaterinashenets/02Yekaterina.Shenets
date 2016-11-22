'use strict';
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
	},
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
},

event:function(type, el, f){
	if(el.attachEvent=="function")
		return el.attachEvent(type, f)
	else
		return el.addEventListener(type, f);
},
unevent: function(type, el, f){
	if(el.detachEvent=="function")
		return el.detachEvent(type, f)
	else
		return el.removeEventListener(type, f);
},
dispatch: function(type, el){   //для всех , кроме  IE8-
	if(document.createEvent){
		var evt=document.createEvent("Event");
		evt.initEvent(type, true, true);
		return el.dispatchEvent(evt);
	}
	else if (document.createEventObject){   //IE8-
		var evt = document.createEventObject();
		return el.fireEvent(type, evt);
	}
},
addClass: function(el, className){
	return el.classList.add(className)
},
removeClass: function(el, className){
	return el.classList.remove(className)
},
containsClass: function(el, className){
	return el.classList.contains(className)
},
toggleClass: function(el, className){
	return el.classList.toggle(className)
},
ajax: function(method, path, func){
	var xhr =  new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState==4)
		if(this.status==200){
			func(this.responseText);
			}
	};
	xhr.open(method, path, true);
	xhr.send();
},
ajaxGet: function(path, func){
	var xhr =  new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState==4)
		if(this.status==200){
			func(this.responseText);
			}
	};
	xhr.open("GET", path, true);
	xhr.send();
},
pageReady: function(func){
	return document.addEventListener("DOMContentLoaded", func);
}
};




/*
framework.ajaxGet("1.html", function(text){
	framework.Get.byId("description").innerHTML=text;
});






*/
