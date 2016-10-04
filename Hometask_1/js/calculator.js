'use strict';
var a = prompt("Введите число");
var operation = prompt("Введите операцию");
var b = prompt("Введите число");
if ( (a*1!==Number(a)) || (b*1!==Number(b)) )
	alert(" Некорректный ввод чисел ");
else { 
	a=Number(a); b=Number(b);
	switch (operation) {
		case '+':
			alert(a+b);
			break;
		case '-':
			alert(a-b);
			break;
		case '*':
			alert(a*b);
			break;
		case '/':
			alert(a/b);
			break;
		default:
			console.log("Проверьте правильность введенной операции!");
			break;
	}
	
}