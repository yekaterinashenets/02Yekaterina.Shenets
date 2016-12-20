'use strict';
var searchLine=framework.Get.byId("searchLine"), offersContainer=framework.Get.byId("searchOffers"), requestContainer=framework.Get.byId("searchRequest"), newsContainer=framework.Get.byId("newsContainer");
var offers=[], tags, request=[], news;


if(localStorage.requestContainer){
	requestContainer.innerHTML=localStorage.requestContainer;
	for(var i=0; i<requestContainer.children.length; i++){
		request.push(requestContainer.children[i].innerHTML);
	}
}

framework.ajax("GET", "news.json", function(text){
	news=JSON.parse(text);
})

framework.ajax("GET", "tags.json", function(text){
	tags=JSON.parse(text);
})


framework.event("keyup", searchLine, function(e){
	offersContainer.innerHTML="";
	if(this.value!=""&&e.code!="Space"&&e.code!="CapsLock"&&e.code!="ControlLeft"&&e.code!="ControlRight"&&e.code!="Enter"&&e.code!="NumpadEnter"&&e.code!="AltLeft"&&e.code!="AltRight"&&e.code!="ShiftLeft"&&e.code!="ShiftRight"){
		findTags(this.value, offers);
		offers=unique(offers);
		formOffers(offers);
		console.log(offers);
		offers=[];
	}
})


framework.event("click", add, function(){
	if(offersContainer.innerHTML!=""){
		addOfferToRequest(offersContainer.children[0].innerHTML, request);
		formRequest();
	}
})

framework.event("click", search, function(){
	if(request){
		findNews();
	}
})


function findNews(){
	for(var i=0; i<news.length; i++){
		for(var j=0; j<request.length; j++){
			if(news[i].tags.indexOf(request[j])==0)
				createPost(news[i].title, news[i].text, news[i].img);
		}
	}
}
function createPost(title, text, img){
	var post=framework.create("div");
	post.innerHTML='<p class="postTitle">'+title+'</p> <br> <p class="postText">'+text+'<img src="'+img+'">';
	framework.append(post, newsContainer);
}
function addOfferToRequest(offer, arr){
	arr.push(offer);
}
function removeOfferFromRequest(offer, arr){
	arr.splice(arr.indexOf(offer), 1);
	console.log(arr);
}
function formOffers(arr){
	offersContainer.innerHTML="";
	for(var i=0; i<arr.length; i++){
		var offer=framework.create("button");
		offer.innerHTML=arr[i];
		framework.append(offer, offersContainer);
		framework.addClass(offer,"offer");
		framework.event("click",offer, function(){
			addOfferToRequest(this.innerHTML, request);
			formRequest();
		})
	}
}

function formRequest(){
	request=unique(request);
	requestContainer.innerHTML="";
		for(var i=0; i<request.length; i++){
			var chooseRequest=framework.create("button");
			chooseRequest.id="choose";
			chooseRequest.innerHTML=request[i];
			framework.append(chooseRequest, requestContainer);
		}
	localStorage.requestContainer=requestContainer.innerHTML;
	console.log(request);
}
function findTags(value, arr){
	var str=value;
	str=str.replace(/^\s*/,'').replace(/\s*$/,'');
	for(var i=0; i<tags.length; i++){
		if(tags[i].toLowerCase().indexOf(str.toLowerCase())==0){
			arr.push(tags[i]);
		}
	}
}

function unique(arr) {
  var result = [];
  nextInput:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i]; 
      for (var j = 0; j < result.length; j++) { 
        if (result[j] == str) continue nextInput; 
      }
      result.push(str);
    }
  return result;
}