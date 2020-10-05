// // var string = "hello";
// // // string += " world";
// // string = string + " world"
// // console.log (string + "!")

// // console.log((5+4)/3);
// // console.log(undefined/5)
// // function go (a) {
// // 	console.log(a / 5);
// // }
// // go()

// var x=4 , y=4;
// if (x==y){
// 	console.log("x=y");
// }
// x="4"
// if (x===y){
// 	console.log ("x=y");
// }

// if (false || null || undefined|| "" || NaN ) {
// 	console.log ("this line won't appear");
// }
// else {
// 	console.log ('all false');
// }
// if (true && "hello"&& 1 && -1 && "false"){

// 	console.log("shit");
// }

// function a()
// {
// 	return 
// 	{
// 		name: "Amer"
// 	};
// }
// function b(){
// 	return{
// 		name: "Amer"
// 	};
// }
// console.log	(a());
// console.log	(b());

// var sum = 0;
// for (var i = 0; i<15; i++){
// 	console.log(i);
// 	sum += i;   //or sum = sum + i ;
// }
// console.log("sum =" +sum);

// function shitwith (someshit){
// 	someshit= someshit|| "shity";
// 	console.log("shitwith " + someshit);
// }
// shitwith("not shity");
// // shitwith();

// var x = 6;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

// var company = new Object();
// company.name = "facebook";
// company.ceo = new Object();
// company.ceo.firstname = "mark";
// company.ceo.favcolor = "blue";
// console.log(company);
// console.log("company ceo name is : " + company.ceo.firstname)
// console.log(company["name"]);
// company["stock of company"] = 110;
// console.log	("stock price is: " + company["stock of company"]);

// //or we can use this way
// var stockpropname = "stock of company";
// company[stockpropname] = 110;
// console.log ("stock price is: " + company [stockpropname]);

// var company = {
// 	name: "Facebook",
// 	ceo: {
// 		firstname: "mark",
// 		favcolor: "blue"
// 	},
// "stock of company": 110,
// cfo: {
// 	secondname : "ali",
// 	favcolor: "green"
// }
// };

// console.log (company);
// console.log(company.ceo.firstname);

// function devid(x , y) {
// 	return x / y;
// }

// devid.version="v.1.2";
// console.log(devid.version);

// function makemulti(multiply){
// 	var myfunc = function(x){
// 		return multiply * x;
// 	};
// 	return myfunc;
// }

// var multi3 = makemulti(3);
// console.log(multi3(10));

// var double = makemulti(2);
// console.log(double(100));

// //passing function as aruguments 
// function doOperationOn(x, operation){
// 	return operation(x);
// }

// var result = doOperationOn(5, multi3);
// console.log (result);
// result = doOperationOn(100, double);
// console.log	(result);

// function test (){
// 	console.log(this);
// 	this.MyName ="Amer";
// }
// test ();
// console.log(window.MyName);

//function contructor
// function Circle (radius) {
// 	this.radius = radius;
// 	this.getArea = function() {
//      return Math.PI * Math.pow(this.radius, 2);
// 	};
// }
// var MyCircle = new Circle(10); // new Obeject();
// console.log(MyCircle.getArea());

// function Circle (radius) {
// 	this.radius = radius;

	
// }
// Circle.prototype.getArea=
// function(){
// 	return Math.PI * Math.pow(this.radius, 2);
// }

// var MyCircle = new Circle(10); // new Obeject();
// console.log(MyCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// var litrarlCircle = {
// 	radius: 10,
// 	getArea:function() {
// 		console.log(this);
// 		return Math.PI * Math.pow (this.radius, 2);
// 	}
// };
// console.log(litrarlCircle.getArea());

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();

//array
// var array = new Array();
// array[0]= "Amer";
// array[1]=2;
// array[2]=function(name){
// 	console.log("Hello"+ name);
// };
// array[3]= {course: "Go away"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// var names = ["Amer","Omari","abdullah"];
// console.log(names);

// for (var i=0; i<names.length; i++ ){
// 	console.log("Hello " + names[i]);
// }

// var names2 = ["Amer","Omari","abdullah"];

// // var myObj = {
// // 	name: "Amer",
// // 	course: "Html",
// // 	platforme: "course"
// // };
// // for (var prop in myObj){
// // console.log(prop + ": " + myObj[prop])
// // }

// for (var name in names2) {
// 	console.log("Hello " +names2[name]);
// }



