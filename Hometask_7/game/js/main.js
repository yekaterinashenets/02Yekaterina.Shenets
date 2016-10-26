'use strict';

(function() {
  var cards = document.querySelectorAll(".container__row-card");
  var cards_inf=document.querySelectorAll(".container__row-card--back");
  var images=["styles/images/1.jpg", "styles/images/1.jpg", "styles/images/2.jpg", "styles/images/2.jpg", "styles/images/3.jpg", "styles/images/3.jpg", "styles/images/4.jpg", "styles/images/4.jpg", "styles/images/5.jpg", "styles/images/5.jpg", "styles/images/6.jpg", "styles/images/6.jpg"];

images.sort(function compareRandom(a, b) {  //перемешиваем картинки
  return Math.random() - 0.5;
});
 for(var i=0; i<cards_inf.length; i++){
 	cards_inf[i].style.background= "url("+images[i]+")";  //делаем обратную сторону карточек перемешанными картинками
 } 

 framework.event("click",framework.Get.byId("start"), function(){
 	window.location.reload();
 } )
  var win_counter=0;
  var two=[];  //будет хранить в себе две открыте карточки
  function clickListener(card) {
  	framework.event("click", card, function(){
      var c = this.classList;
      	if(two.length<2){
      			if((two.length==1)&&(two[0]!=this)){
      			    two.push(this);
      			    c.add("flipped");
      			}
      			else if (two.length==0){
      			      two.push(this);
      			      c.add("flipped");
      			}
      	}
      	else if(two[0].innerHTML==two[1].innerHTML){
      	    for (var k = 0; k < two.length; k++) {
      	      	two[k].style.visibility="hidden";
      	      	win_counter++;
      	     };
      	    two=[];
      	    c.add("flipped");
      	    two.push(this);
      	}
      	else {
      	    for (var k = 0; k < two.length; k++) {
      	      	var pr=two[k].classList;
      	      	pr.remove("flipped");
      	     };
      	    two=[];
      	    c.add("flipped");
      	    two.push(this);
      	}
      	if(win_counter==10){   //очевидно, что будет победа
      		framework.Get.byId("container__win").style.display="block";
      	}
    })
  }
  for ( var i  = 0; i <cards.length; i++ ){
    var card = cards[i];
    clickListener(card);
  }; 

})();
