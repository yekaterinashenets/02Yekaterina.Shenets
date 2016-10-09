var s1=Number(prompt("Введите среднее значение элементов массива"));
var p=Number(prompt("Введите отклонение от среднего значения в % "));
var n=Number(prompt("Введите количество элементов массива"));
var a=new Array(n);

p=p*s1/100; //переводим из процентов

for(var i=0; i<n;i++){
	a[i]=Math.random()*((s1+p)-(s1-p))+(s1-p);
	console.log(a[i]);
}

var sum=0; //сумма элементов
 for(var i=0 ;i<a.length; i++){  //сортируем массив методом пузырька
 	sum+=a[i]; 
	for(var j=i; j<a.length;j++)
		if(a[j]>a[j-1]){
			var x=a[j];
			a[j]=a[j-1];
			a[j-1]=x;
		}
}

var s2=sum/n;
alert("Среднее значение полученного массива равно: "+ s2);
