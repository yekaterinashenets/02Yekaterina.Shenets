'use strict';
var song = new Audio();
song.src="song.mp3";
framework.append(song, document.body);

var isPlayed=true;
song.volume=framework.Get.byId("volume").value;

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
};

framework.event("click", framework.Get.byId("currentPlay"), function(e){
	var currSec=song.duration*e.offsetX/framework.Get.byId("currentPlay").offsetWidth;
	framework.Get.byId("currentPlay").value=currSec;
	song.currentTime=currSec;
})

framework.event("click", framework.Get.byId("play"), function(){
	if (isPlayed==true) {
		song.play();
		isPlayed=false;
		framework.Get.byId("play").style.backgroundImage="url(styles/images/pause.png)";
	}
	else {
		song.pause();
		isPlayed=true;
		framework.Get.byId("play").style.backgroundImage="url(styles/images/play.png)";
	}
	
})

framework.event("click", framework.Get.byId("stop"), function(){
	song.currentTime=0;
	song.pause();
	isPlayed=true;
	framework.Get.byId("play").style.backgroundImage="url(styles/images/play.png)";
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