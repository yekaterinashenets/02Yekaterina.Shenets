var tel=prompt("Введите e-mail");
if(/^[a-z0-9]+[a-z0-9\.\_\-]*\@[a-z0-9]+[a-z0-9\_\-]*\.[a-z]{2,}$/g.test(tel)==true)
	alert("e-mail введен правильно")
else
	alert("e-mail введен неверно");