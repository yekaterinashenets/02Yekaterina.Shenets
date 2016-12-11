'use strict';

navigator.geolocation.getCurrentPosition(function(e){
	var coords = new google.maps.LatLng(e.coords.latitude, e.coords.longitude);
	var settings={
		zoom:4,
		center: coords,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(framework.Get.byId("map"), settings);
	var pathCoordinates=[];

	framework.ajax("GET", "markers.json", function(text){
		var data=JSON.parse(text);
		for(var j=0; j<data.length; j++){
			(function(i){

				var myLatLng= {lat: +data[i].lat, lng: +data[i].lon};
				var marker = new google.maps.Marker({
			    	position: myLatLng,
			    	map: map,
			    	title: data[i].title
				});
			var contentString = '<div id="content">'+
		      '<div id="siteNotice">'+
		      '</div>'+
		      '<h1 id="firstHeading" class="firstHeading">'+data[i].title+'</h1>'+
		      '<div id="bodyContent">'+
		      '<p>'+data[i].description+'</p>'+
		      '</div>'+
		      '</div>';
		 	 var infowindow = new google.maps.InfoWindow({
		    	content: contentString
		  	});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
			pathCoordinates.push({lat: +data[i].lat, lng: +data[i].lon});
			})(j);
		};
		 var path = new google.maps.Polyline({
		    path: pathCoordinates,
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 2
		});
  		path.setMap(map);
	})
});

