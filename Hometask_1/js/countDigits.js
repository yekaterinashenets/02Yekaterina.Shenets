'use strict';
var a = Number(prompt("Введите число"));
function countDigits(x){
	x = (x - x%10)/10;
	if(x)
		return 1 + countDigits(x);
	else 
		return 1;
} 
alert("Количество цифр в числе равно "+countDigits(a));
