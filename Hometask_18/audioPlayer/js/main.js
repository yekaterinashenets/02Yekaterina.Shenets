'use strict';
var song = new Audio();

framework.append(song, document.body);


var songs=[]; var songNumber=0;
var songsNames=[];
var isPlayed=false;
song.volume=framework.Get.byId("volume").value;


framework.event("dragover",framework.Get.byId("songs"), function(ev){
	ev.preventDefault();
	ev.stopPropagation();
})
framework.event("dragleave",framework.Get.byId("songs"), function(ev){
	
	ev.preventDefault();
	ev.stopPropagation();
	
})
framework.event("drop",framework.Get.byId("songs"), function(ev){

	ev.preventDefault();
	ev.stopPropagation();
	var reader=new FileReader();
	reader.readAsDataURL(ev.dataTransfer.files[0]);
	var div=framework.create("div");
	div.innerHTML=ev.dataTransfer.files[0].name;
	songsNames.push(ev.dataTransfer.files[0].name);
	framework.append(div, framework.Get.byId("playList"));
	framework.addClass(div, "song");
	reader.onload=function(e){
		songs.push(reader.result);
		framework.event("click", div, function(){
			for(var i=0; i<framework.Get.byClass("song").length; i++){
				if(framework.containsClass(framework.Get.byClass("song")[i], "active"))
					framework.removeClass(framework.Get.byClass("song")[i], "active")};
			framework.addClass(div, "active");
			song.src=reader.result;
			letPlay();
			for(var i=0; i<songs.length; i++){
				if(div.innerHTML==songsNames[i]){
					songNumber=i;
					song.src=songs[songNumber];
					letPlay();
				}
			}
		})
	};
	
})

/*framework.event("loadeddata", song, function(){
	if(localStorage.curr)
		song.currentTime=localStorage.curr*1;
	if(localStorage.isPlay=="false"){
		framework.Get.byId("play").style.backgroundImage="url(styles/images/play.png)";
		song.pause();
		isPlayed=false;
	}

	else{
		isPlayed=true;
		song.play();
		framework.Get.byId("play").style.backgroundImage="url(styles/images/pause.png)";
	}
})*/
framework.event("loadedmetadata", song, function(){
	
	framework.Get.byId("currentPlay").max=song.duration;
	var minutes=Math.floor(song.duration/60);
	var seconds=Math.floor(song.duration-60*minutes);
	if(seconds>=0&&seconds<10)
		framework.Get.byId("fullTime").innerHTML=minutes+":0"+seconds;
	else
		framework.Get.byId("fullTime").innerHTML=minutes+":"+seconds;
	window.setInterval(currentValue, 1000);
});
function currentValue(){
	var minutes=Math.floor(song.currentTime/60);
	var seconds=Math.floor(song.currentTime-60*minutes);
	if(seconds>=0&&seconds<10)
		framework.Get.byId("playedTime").innerHTML=minutes+":0"+seconds+" / ";
	else
		framework.Get.byId("playedTime").innerHTML=minutes+":"+seconds+" / ";
	framework.Get.byId("currentPlay").value=song.currentTime;
	localStorage.curr=song.currentTime;
	if(song.currentTime==song.duration){
		songNumber++;
		song.src=songs[songNumber];
		for(var i=0; i<framework.Get.byClass("song").length; i++){
				if(framework.containsClass(framework.Get.byClass("song")[i], "active"))
					framework.removeClass(framework.Get.byClass("song")[i], "active");
				if(framework.Get.byClass("song")[i].innerHTML==songsNames[songNumber])
					framework.addClass(framework.Get.byClass("song")[i], "active");
		};
		
		letPlay();
	}
	if(songNumber==songs.length){
			songNumber=0;
			song.src=songs[songNumber];
			for(var i=0; i<framework.Get.byClass("song").length; i++){
				if(framework.containsClass(framework.Get.byClass("song")[i], "active"))
					framework.removeClass(framework.Get.byClass("song")[i], "active");
				if(framework.Get.byClass("song")[i].innerHTML==songsNames[songNumber])
					framework.addClass(framework.Get.byClass("song")[i], "active");
		};
			letPlay();
		}
};

framework.event("click", framework.Get.byId("currentPlay"), function(e){
	var currSec=song.duration*e.offsetX/framework.Get.byId("currentPlay").offsetWidth;
	framework.Get.byId("currentPlay").value=currSec;
	song.currentTime=currSec;
})

framework.event("click", framework.Get.byId("play"), function(){
	if (isPlayed==false) {
		localStorage.isPlay="true";		
		letPlay();
	}
	else {
		localStorage.isPlay="false";
		letPause();
	}
	
})

framework.event("click", framework.Get.byId("stop"), function(){
	song.currentTime=0;
	letPause();
})

framework.event("click", framework.Get.byId("mute"), function(){
	if(song.muted==false){
		song.muted=true;
		framework.Get.byId("mute").style.backgroundImage="url(styles/images/volumeLoud.png)";
		framework.Get.byId("volume").value="0";
		song.volume=0;
	}
	else {
		song.muted=false;
		framework.Get.byId("mute").style.backgroundImage="url(styles/images/mute.png)";
		framework.Get.byId("volume").value="0.05";
		song.volume=0.05;
	} 
})

framework.event("click", framework.Get.byId("faster"), function(){
	song.playbackRate=song.playbackRate*1.5;
})

framework.event("click", framework.Get.byId("slower"), function(){
	song.playbackRate=song.playbackRate/1.5;
})

framework.event("click", framework.Get.byId("loop"), function(){
	if(song.loop==false){
		song.loop=true;
		framework.Get.byId("loop").style.backgroundImage="url(styles/images/unloop.png)";
	}
	else {
		song.loop=false;
		framework.Get.byId("loop").style.backgroundImage="url(styles/images/again.png)";
	} 
})

framework.event("change", framework.Get.byId("volume"), function(){
	song.volume=framework.Get.byId("volume").value;
	if(song.volume==0){
		song.muted=true;
		framework.Get.byId("mute").style.backgroundImage="url(styles/images/volumeLoud.png)";
	}
	else{
		song.muted=false;
		framework.Get.byId("mute").style.backgroundImage="url(styles/images/mute.png)";
	}
})

function letPlay(){
	song.play();
	isPlayed=true;
	framework.Get.byId("play").style.backgroundImage="url(styles/images/pause.png)";
}
function letPause(){
	song.pause();
	isPlayed=false;
	framework.Get.byId("play").style.backgroundImage="url(styles/images/play.png)";
}