onmessage=function(e){
	var n=e.data;
	for (var j=0; j<n; j++){
		var arr=new Array(100000);
		for (var i = 0; i < 100000; i++) {
			arr[i]=Math.round(Math.random() * 30);
		}
		postMessage(arr);
	}
}
