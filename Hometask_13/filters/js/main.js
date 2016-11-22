"use strict";

framework.event("click", framework.Get.byId("blackWhite"), function(){
    var img = framework.Get.byId('img');
    var canvas = framework.Get.byId('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 576, 387);
    var imageDataFiltered = blackWhite(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
})

framework.event("click", framework.Get.byId("sepia"), function(){
    var img = framework.Get.byId('img');
    var canvas = framework.Get.byId('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 576, 387);
    var imageDataFiltered = sepia(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
})

framework.event("click", framework.Get.byId("negative"), function(){
    var img = framework.Get.byId('img');
    var canvas = framework.Get.byId('canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 576, 387);
    var imageDataFiltered = negative(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
})

 function sepia(imageData) {
  var pixels = imageData.data;
  for (var i = 0; i < pixels.length; i += 4) {
    var r = pixels[i];
    var g = pixels[i + 1];
    var b = pixels[i + 2];
    pixels[i]     = (r * 0.393)+(g * 0.769)+(b * 0.189); // red
    pixels[i + 1] = (r * 0.349)+(g * 0.686)+(b * 0.168); // green
    pixels[i + 2] = (r * 0.272)+(g * 0.534)+(b * 0.131); // blue
  }
  return imageData;
};

function blackWhite(imageData) {
    var pixels = imageData.data;
  for (var i = 0; i < pixels.length; i += 4) {
    var r = pixels[i];
    var g = pixels[i + 1];
    var b = pixels[i + 2];
    pixels[i]     = 0.2989*r+0.5870 *g+0.1140 *b; // red
    pixels[i + 1] = 0.2989*r+0.5870 *g+0.1140 *b; // green
    pixels[i + 2] = 0.2989*r+0.5870 *g+0.1140 *b; // blue
  }
  return imageData;
}

function negative(imageData) {
    var pixels = imageData.data;
  for (var i = 0; i < pixels.length; i += 4) {
    var r = pixels[i];
    var g = pixels[i + 1];
    var b = pixels[i + 2];
    pixels[i]     = 255-r; // red
    pixels[i + 1] = 255-g; // green
    pixels[i + 2] = 255-b; // blue
  }
  return imageData;
}