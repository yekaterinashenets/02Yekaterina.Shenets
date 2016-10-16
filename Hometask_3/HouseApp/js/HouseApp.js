'use strict';
var app = new Object();
app.HousesArr=[];
app.clear=function(){
	app.HousesArr=[]
}
app.House=function(numOfApartments, area, material, numOfFloors, address, yearOfConstruction) { return{
	numOfApartments: numOfApartments,
	area: area,
	numOfRezidents:0,
	rezidentsArr:[],
	material:material,
	numOfFloors:numOfFloors,
	address: address,
	yearOfConstruction:yearOfConstruction,
	addToHousesArr:function(){
	app.HousesArr.push(this);
	}
}
};
app.Person=function(height, weight, name, gender, age, occupation, i) { return{
	height: height,
	weight: weight,
	name: name,
	gender: gender,
	age: age,
	occupation: occupation,
	homeAddress:"",
	toSettle : function(){
		if(app.HousesArr[i-1]==undefined)
			alert("Этот дом еще не построен");
		else{
			app.HousesArr[i-1].numOfRezidents++; //количество жильцов увеличивается по мере заселения человека в дом, оно не задается при создании дома
			this.homeAddress=app.HousesArr[i-1].address;
			app.HousesArr[i-1].rezidentsArr.push(this);
			}
	}
	}
};
app.requestHouseInfo=function() {
	return app.House(
	Number(prompt("Введите количество квартир в доме")),
	Number(prompt("Введите количество квадратных метров дома")),
	prompt("Введите материал, из которого будет построен дом"),
	Number(prompt("Введите количество этажей в доме")),
	prompt("Введите адрес дома"),
	Number(prompt("Введите год постройки дома"))
	)
}
app.requestPersonInfo=function(){
	return app.Person(
	Number(prompt("Введите рост человека")),
	Number(prompt("Введите вес человека")),
	prompt("Введите имя человека"),
	prompt("Введите пол человека"),
	Number(prompt("Введите возраст человека")),
	prompt("Введите род занятий человека"),
	Number(prompt("Количество домов в массиве домов сейчас "+app.HousesArr.length+". Введите номер дома, в который будет поселен человек"))
		)
}

app.sortHousesArr=function(){  //сортировка и вывод массива по количеству жителей
	app.HousesArr.sort(function(HouseA, HouseB){
	return HouseB.numOfRezidents-HouseA.numOfRezidents
	});
	console.log(app.HousesArr);
}

app.House(46,12000, 'Кирпич', 12,'Минск, ул. Октябрьская, 10', 2015).addToHousesArr();
app.House(32,9000, 'Дерево', 4,'Минск, ул. Чкалова, 4', 1990).addToHousesArr();
app.requestHouseInfo().addToHousesArr();
app.Person(170,48,'Екатерина Шенец','ж',18,'Открытки',1).toSettle();
app.Person(160,55,'Круглик Анатолий','ж',66,'Музыка',3).toSettle();
app.requestPersonInfo().toSettle();
app.sortHousesArr();
app.clear();
app.House(46,12000, 'Кирпич', 12,'Минск, ул. Октябрьская, 10', 2015).addToHousesArr();
app.Person(170,48,'Екатерина Шенец','ж',18,'Открытки',2).toSettle(); //не будет поселен,т.к сейчас в массиве домой только один дом,а здесь указывается  номер два
console.log(app.HousesArr);

