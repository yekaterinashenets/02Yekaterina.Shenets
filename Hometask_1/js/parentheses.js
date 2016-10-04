'use strict';
var s = prompt("Введите строку, содержащую круглые скобки");
var count1=0, count2=0;
for (var i=0; i<s.length; i++){
	if((s[i]=="("))
		count1++;
	if( (s[i]==")") && (count1==0) )
		continue;
	if(s[i]==")")
		count2++;
}
if(count1==count2)
	alert("Скобки расставлены правильно")
else
	alert("Скобки расставлены не правильно")