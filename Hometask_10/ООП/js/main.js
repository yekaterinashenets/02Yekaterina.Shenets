'use strict';
var id=0, n=0, counter=0;
function Product(name, type, price, releaceDate){
	this.id=++id;
	this.name=name;
	this.type=type;
	this.price=price;
	this.releaceDate=releaceDate;
}
function foodProduct(periodOfStorage, name, type, price, releaceDate){
	Product.apply(this, [name, type, price, releaceDate]);
	this.periodOfStorage=periodOfStorage;
	this.id=--id;
	var d=new Date(releaceDate);
	d.setDate(d.getDate()+periodOfStorage);
	d=d.getMonth()+1+"/"+d.getDate()+"/"+d.getFullYear();
	this.bestBefore=d;
}

Object.defineProperty(foodProduct, "periodOfStorage", {
	writable:false
})
foodProduct.prototype = new Product();
foodProduct.prototype.costructor=foodProduct;


function Shop(name, address, markUp, income){
	this.name=name;
	this.address=address;
	this.goods=[];
	this.markUp=markUp;
	this.income=income;
	
}
/*Object.defineProperty(Shop, "totalCost", {
	value: function(){
		var cost=0;
		for(var i=0; i<goods.length; i++)
			cost+=this.goods[i].price;
		return this.cost;
	}
})*/
Shop.prototype.addToMarket=function(market){
	market.Shops.push(this);
	n++;
}

Shop.prototype.addProducts=function(procuct, n){
		for(var i=0; i<n; i++)
			this.goods.push(procuct);
	}
Shop.prototype.debitItem=function(procuct){
		this.goods=this.goods.filter(function(goods){return goods.name!=procuct.name})
	}
Shop.prototype.showInfo=function(){
		
}


function Market(){
	this.Shops=[];
	this.showShops=function(){
		counter++;
		for(var i=0; i<n; i++){
			var shop=framework.create("div");
			var shopName=framework.create("p");
			shopName.innerHTML="<span>Название магазина: </span>"+Mark.Shops[i].name;
			var shopAddress=framework.create("p");
			shopAddress.innerHTML="<span>Адрес: </span>"+Mark.Shops[i].address;
			var shopMarkup=framework.create("p");
			shopMarkup.innerHTML="<span>Наценка: </span>"+Mark.Shops[i].markUp;
			var shopIncome=framework.create("p");
			shopIncome.innerHTML="<span>Доход: </span>"+Mark.Shops[i].income;
			var shopGoods=framework.create("p");
			shopGoods.innerHTML="<span>Товары: </span> <br>";
			framework.addClass(shop, "shop");


			framework.append(shopName, shop);
			framework.append(shopAddress, shop);
			framework.append(shopMarkup, shop);
			framework.append(shopIncome, shop);
			framework.append(shopGoods, shop);

			function unique() {  //отбираем для вывода уникальные товары
  				var result = [];
				next:
    		for (var k = 0; k < Mark.Shops[i].goods.length; k++) {
      		var itm = Mark.Shops[i].goods[k]; 
      		for (var j = 0; j < result.length; j++) { 
        		if (result[j].name == itm.name) continue next; 
      		}
      		result.push(itm);
   			}
   			
 			 return result;
			};
			var uniqueItems=unique();
			for(var j=0; j<uniqueItems.length; j++){
				var item=framework.create("div");
				framework.addClass(item, "item");
				item.innerHTML="<img src='styles/images/"+uniqueItems[j].name+".jpg'>";
				var itemName=framework.create("p");
				itemName.innerHTML="<span>"+uniqueItems[j].name+"</span>";
				var itemPrice=framework.create("p");
				itemPrice.innerHTML="<span>Цена: </span>"+uniqueItems[j].price+"р.";
				var itemDate=framework.create("p");
				itemDate.innerHTML="<span>Дата изготовления: </span>"+uniqueItems[j].releaceDate;
				framework.append(itemName, item);
				framework.append(itemPrice, item);
				framework.append(itemDate, item);
				if("periodOfStorage" in uniqueItems[j]){
					var itemStorage=framework.create("p");
					itemStorage.innerHTML="<span>Срок хранения (в сутках): </span>"+uniqueItems[j].periodOfStorage;
					framework.append(itemStorage, item);
				}
				framework.append(item, shop);
			}
			framework.append( shop, framework.Get.byId("container"));

		}
	}
}


var Mark=new Market();
var sosedi=new Shop("Соседи", "ТРЦ Галилео", "2%", "1000р/сутки");
var evroopt=new Shop("Евроопт", "ул. Семёнова", "1%", "2000р/сутки")

var milk = new foodProduct( 2, "Молоко 1.5%", "напиток", 1.20, '10/24/2016');
var ball=new Product("Мяч футбольный", "игрушка", 8.00, "23/05/2016");
var bread=new foodProduct(4, "Хлеб зерновой", "хлебо-булочное изделие", 0.58, "11/13/2016");
var armchair=new Product("Кресло мягкое", "мебель", 100.00, "07/10/2015");
var glass=new Product("Стакан стеклянный", "посуда", 2.38 ,"09/10/2016");


sosedi.addProducts(milk, 2);
sosedi.addProducts(ball,1);

evroopt.addProducts(bread, 2);
evroopt.addProducts(armchair, 5);
evroopt.addProducts(glass, 1);

sosedi.addToMarket(Mark);
evroopt.addToMarket(Mark);


console.log(Mark);


framework.event("click", framework.Get.byId("show"), function(){
	if(counter==0)
	Mark.showShops()});
framework.event("click", framework.Get.byId("add"), function(){
	framework.Get.byId("show").style.display="none";
	framework.Get.byId("inputValues").style.display="block";
	framework.event("click", framework.Get.byId("create"), function(){
		var newShop=new Shop(framework.Get.byId("name").value, framework.Get.byId("addr").value, framework.Get.byId("markup").value, framework.Get.byId("income").value);
		framework.Get.byId("name").value="";
		framework.Get.byId("addr").value="";
		framework.Get.byId("markup").value="";
		framework.Get.byId("income").value="";
		if(counter==0)Mark.showShops();
		newShop.addToMarket(Mark);
		var shop=framework.create("div");
			var shopName=framework.create("p");
			shopName.innerHTML="<span>Название магазина: </span>"+newShop.name;
			var shopAddress=framework.create("p");
			shopAddress.innerHTML="<span>Адрес: </span>"+newShop.address;
			var shopMarkup=framework.create("p");
			shopMarkup.innerHTML="<span>Наценка: </span>"+newShop.markUp;
			var shopIncome=framework.create("p");
			shopIncome.innerHTML="<span>Доход: </span>"+newShop.income;
			var shopGoods=framework.create("p");
			shopGoods.innerHTML="<span>Товары: </span> <br>";
			framework.addClass(shop, "shop");
			
			framework.append(shopName, shop);
			framework.append(shopAddress, shop);
			framework.append(shopMarkup, shop);
			framework.append(shopIncome, shop);
			framework.append(shopGoods, shop);
			framework.append( shop, framework.Get.byId("container"));
	})
})


