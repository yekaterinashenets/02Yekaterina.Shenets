'use strict';
var Player;
var isPlayed, isNowPlayed;
function onYouTubeIframeAPIReady(){
	Player=new YT.Player("player");
	Player.addEventListener('onStateChange', function(e) {
		isPlayed=e.data;   // 
    });
}

framework.event("visibilitychange", document, function(e){
	if(document.hidden==true&&isPlayed==1){
		isNowPlayed=true;
		Player.pauseVideo();
	}
	if(document.hidden==true&&isPlayed==2){
		isNowPlayed=false;
	}

	if(document.hidden==false&&isPlayed==2&&isNowPlayed==true)
		Player.playVideo();
});

//SHARING
(function() {
  if (window.pluso)if (typeof window.pluso.start == "function") return;
  if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();