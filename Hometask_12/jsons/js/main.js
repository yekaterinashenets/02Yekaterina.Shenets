
var d;

framework.ajax("GET", "categories.json", function(text){

d=JSON.parse(text);
for(var i=0; i<d.length; i++){
		var li=framework.create("li");
		li.innerHTML="<a href='"+d[i].hash+"'>"+d[i].title+"</a>";
		li.id="menu__item";
		framework.append(li, framework.Get.byId("menu"));
}


window.onhashchange=function(){
	for(var i=0; i<d.length; i++){
		var h=location.hash;
		if(h==d[i].hash){
			var time1=new Date();
			framework.ajax("GET", d[i].filename, function(text){
				var time2=new Date();
				console.log(time2-time1);
				var categoryInf=JSON.parse(text);
				framework.Get.byId("container").innerHTML="";
				for(var j=0; j<categoryInf.length; j++){
					var div=framework.create("div");
					div.innerHTML="<img src='"+categoryInf[j].img+"'>"+"<div class='description'> <p class='name'>  "+categoryInf[j].name+"</p>"+"<p class='briefly_description'> <b>Краткое описание:</b> "+categoryInf[j].briefly_description+"</p><b> Цена: </b> <span id='price'>"+categoryInf[j].price+"</span><span> p.</span><br><button class='add'>+</button><span id='quantity'>"+1+"</span><button class='remove'>-</button><br><b>Итого: </b><span id='result'>"+categoryInf[j].price+" </span><span> p.</span></div>";
					framework.append(div, framework.Get.byId("container"));

					
					framework.event("click", framework.Get.byClass("add")[j], function(){
						for(var k=0; k<this.parentNode.children.length; k++){
							var quantity, result, price;
							if(this.parentNode.children[k].id=="price"){
								price=this.parentNode.children[k];
							};
							if(this.parentNode.children[k].id=="quantity"){
								quantity=this.parentNode.children[k];
								quantity.innerHTML++;
								this.parentNode.children[k].innerHTML=quantity.innerHTML;
							};
							if(this.parentNode.children[k].id=="result"){
								result=this.parentNode.children[k];
								result.innerHTML=quantity.innerHTML*price.innerHTML;
							}
						}
					});

					framework.event("click", framework.Get.byClass("remove")[j], function(){
						for(var k=0; k<this.parentNode.children.length; k++){
							var quantity, result, price;
							if(this.parentNode.children[k].id=="price"){
								price=this.parentNode.children[k];
							}
							if(this.parentNode.children[k].id=="quantity"){
								quantity=this.parentNode.children[k];
								if(quantity.innerHTML>0){
									quantity.innerHTML--;
									this.parentNode.children[k].innerHTML=quantity.innerHTML;
								}
							};
							if(this.parentNode.children[k].id=="result"){
								result=this.parentNode.children[k];
								if(quantity.innerHTML>=1){
									result.innerHTML=Number(result.innerHTML-price.innerHTML);
								}
								else
									result.innerHTML=0;

							}
						}
					});
					
				};
			})
			
			
		}
	}
}
window.onhashchange();
});


