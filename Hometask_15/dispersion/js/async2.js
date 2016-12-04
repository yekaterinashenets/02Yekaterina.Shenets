onmessage = function(e){
	var avg=0;
	var length=e.data.length;
	for(var i=0; i<length; i++)
		avg+=e.data[i];
	avg=avg/length;
	postMessage(avg);
}