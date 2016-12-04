'use strict';
var numCalculations=framework.Get.byId("numCalculations");
var values=framework.Get.byId("values");
framework.event("click", framework.Get.byId("count"), function(){
	values.innerHTML="";
	var worker1 = new Worker("js/async1.js");
	worker1.onmessage=function(e){

		var worker2 = new Worker("js/async2.js");
		worker2.onmessage = function(e){
			var value=framework.create("div");
			value.innerHTML=e.data;
			framework.append(value, values);
			numCalculations.value="";
		};
	worker2.postMessage(e.data);
	}

	worker1.postMessage(numCalculations.value);
})
