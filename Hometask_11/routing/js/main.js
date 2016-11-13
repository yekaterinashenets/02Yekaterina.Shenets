'use strict';

var hashes=[
	{
		hash: "",
		path: "main.html",
		handler: function(){
		}
	},
	{
		hash: "#main",
		path: "main.html",
		handler: function(){
		}
	},
	{
		hash: "#designers",
		path: "designers.html",
		handler: function(){
			framework.event("click", framework.Get.byId("sendRequest"), function(){
				if(framework.Get.byId("inputName").value!=""){
					framework.Get.byId("popup__container-text").innerHTML=framework.Get.byId("inputName").value+", ваша заявка принята на рассмотрение";
					for (var i = 0; i < framework.Get.byClass("designers__request-field").length; i++) {
						framework.Get.byClass("designers__request-field")[i].value="";
					}
				}
				else
					framework.Get.byId("popup__container-text").innerHTML=framework.Get.byId("inputName").value+"заполните поле 'Имя'";
				framework.Get.byId("popup").style.display="block";
			});
			framework.event("click", framework.Get.byId("popup"), function(){
			this.style.display="none";
			});
			framework.event("click", framework.Get.byId("popup__close"), function(){
			framework.Get.byId("popup").style.display="none";
			});
			framework.Get.byId("popup__container").addEventListener("click", function(event){
			event.stopPropagation();
			});
		}
	},
	{
		hash: "#shop",
		path: "shops.html",
		handler: function(){
			framework.event("click", framework.Get.byId("shop__showMap"), function(){
				framework.Get.byId("shop__map").style.display="block";
				framework.Get.byId("shop__showMap").scrollIntoView(true);
			});

		}
	},
	{
		hash: "#rules",
		path: "rules.html",
		handler: function(){
			console.log("vdbr")
		}
	},
	{
		hash: "#masterclasses",
		path: "masterclasses.html",
		handler: function(){
		}
	},
];

window.onhashchange=function(){
	var h=location.hash;
	for (var i = 0; i < hashes.length; i++) {
		if(h==hashes[i].hash){
			var hand=hashes[i].handler;
			framework.ajaxGet(hashes[i].path, function(text){
				framework.Get.byId("content").innerHTML=text;
				hand();
			});

		}
}
};
framework.pageReady(window.onhashchange);









