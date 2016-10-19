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

var countries = [
	{
		name: "Беларусь",
		flag: "", 
		telCode: 375,		
		population: 9498364,
		area: 207600
	},
	{
		name: "Россия",
		flag: "",
		telCode: 7,		
		population:146544710 ,
		area: 17100000
	},{
		name:"Украина" ,
		flag: "",
		telCode: 380,		
		population:42488512 ,
		area: 603628
	},
	{
		name: "Грузия" ,
		flag: "",
		telCode: 995,
		population:3729635,
		area: 69700
	}
];

var properties=[];
properties[0]="Название страны";
properties[1]="Флаг";
properties[2]="Телефонный код";
properties[3]="Численность населения";
properties[4]="Площадь (кв.км)";


var table=framework.create("table");

var tr=[];

var th=[];
var td=[];
for(var i=0; i<countries.length+1; i++){
	tr[i]=framework.create("tr");
	framework.append(tr[i], table)
	for(var j=0; j<properties.length; j++){

		if(i==0&&j>=0){
			th[j]=framework.create("th");
			th[j].innerHTML=properties[j];
			framework.append(th[j], tr[i]);
		}
		if(i>0&&j==0){
			td[j]=framework.create("td");
			td[j].innerHTML=countries[i-1].name;
			framework.append(td[j], tr[i]);
		}
		if(i>0&&j==1){
			td[j]=framework.create("td");
			td[j].innerHTML=countries[i-1].flag;
			framework.append(td[j], tr[i]);
		}
		if(i>0&&j==2){
			td[j]=framework.create("td");
			td[j].innerHTML='+'+countries[i-1].telCode;
			framework.append(td[j], tr[i]);
		}
		if(i>0&&j==3){
			td[j]=framework.create("td");
			td[j].innerHTML=countries[i-1].population;
			framework.append(td[j], tr[i]);
		}
		if(i>0&&j==4){
			td[j]=framework.create("td");
			td[j].innerHTML=countries[i-1].area;
			framework.append(td[j], tr[i]);
		}
	}
}

document.body.appendChild(table);












