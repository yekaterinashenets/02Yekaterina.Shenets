'use strict';

function clock(){	
	if(framework.Get.byId("canvas")!=undefined)
		framework.remove(framework.Get.byId("canvas"));

	var canvasElement=framework.create("canvas");
	canvasElement.setAttribute("width", 1000);
	canvasElement.setAttribute("height", 400);
	canvasElement.id="canvas";
	var context=canvasElement.getContext("2d");

	context.beginPath();
	context.fillStyle="rgba(0,0,0,1)";
	context.arc(600,200, 100, 0, Math.PI*2);
	context.fill();
	context.closePath();

	context.beginPath();
	context.fillStyle="rgba(255,255,255,1)"
	context.arc(600,200, 80, 0, Math.PI*2);
	context.fill();
	context.closePath();

	context.beginPath();
	context.moveTo(520,200);
	context.lineTo(680,200);
	context.stroke();
	context.closePath();

	context.beginPath();
	context.moveTo(600,120);
	context.lineTo(600,280);
	context.stroke();
	context.closePath();


	context.beginPath();
	context.arc(600,200, 70, 0, Math.PI*2);
	context.fillStyle="rgba(255,255,255,1)";
	context.fill();
	context.closePath();

	context.beginPath();
	context.arc(600,200, 2, 0, Math.PI*2);
	context.fillStyle="rgba(0,0,0,1)";
	context.fill();
	context.closePath();

	context.font="16px Arial";
	context.textAlign="center";
	context.translate(600,200);
	context.fillText("12", 0, -50);
	context.rotate(Math.PI/2);
	context.fillText("3", 0, -50);
	context.rotate(Math.PI/2);
	context.fillText("6.", 0, -50);
	context.rotate(Math.PI/2);
	context.fillText("9.", 0, -50);
	context.rotate(Math.PI/2);
	

	var d=new Date();
	console.log(d);
	context.rotate((d.getHours()-12)*Math.PI*2/12);
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0, -25);
	context.stroke();
	context.closePath();

	context.rotate(-(d.getHours()-12)*Math.PI*2/12);

	context.rotate(d.getMinutes()*Math.PI/30);
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0, -37);
	context.stroke();
	context.closePath();

	context.rotate(-d.getMinutes()*Math.PI/30);

	context.rotate(d.getSeconds()*Math.PI/30);
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0, -45);
	context.stroke();
	context.closePath();
	console.log(d.getSeconds());

	context.rotate(-d.getSeconds()*Math.PI/30);

	framework.append(canvasElement, document.body);
	
}

window.setInterval(clock, 1000);




/*var dataURL=canvasElement.toDataURL("image/png");
var img = framework.create("img");
img.setAttribute("src", dataURL);
framework.append(img, document.body);
var imageData=context.getImageData(0,0, 100, 100);
console.log(imageData);*/
