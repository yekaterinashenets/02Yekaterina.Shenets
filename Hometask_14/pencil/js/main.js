'use strict';
var canvas;
var context;
var isDrawing;
canvas = document.getElementById("drawingCanvas");
context = canvas.getContext("2d");
context.strokeStyle = "black";
canvas.onmousedown = startDrawing;
canvas.onmouseup = stopDrawing;
canvas.onmouseout = stopDrawing;
canvas.onmousemove = draw;

framework.event("click", framework.Get.byId("clear"), function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
})

function startDrawing(e) {
	isDrawing = true;
	context.beginPath();
	context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}
function draw(e) {
	if (isDrawing == true)
	{
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		
		context.lineTo(x, y);
		context.stroke();
	}
}
function stopDrawing() {
    isDrawing = false;	
}