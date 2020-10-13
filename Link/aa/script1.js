// ///////////////////////////the regular functions :
// function findBiggestNumber(a,b){
// 	var result;
// 	a>b ? result=["first Number: ", a] : console.logresult=["second Number: ", b];
// return result;
// }

// var c = 3/4;
// var v = 5/7;
// var fractionResult = findBiggestNumber(c,v);

// console.log("the first number: ", c);
// console.log("the second number: ", v);
// console.log("fraction is: " + fractionResult[0] + "with a value of "+ fractionResult[1]+ " is the biggest");

// //////////////////////////the anonymous functions :
// var theBiggest = function(){
//       a>b  ? solution= ["the first number is bigger: ", a] : solution=["the second Number is biiger: ", b];
//         console.log(solution);
//          return solution;
   
// }
// var a=5;
// var b=7;
// theBiggest();

// //or:
// var theBiggest = function(a,b){
//       a>b  ? solution= ["the first number is bigger: ", a] : solution=["the second Number is biiger: ", b];
        
//          return solution;
   
// }
// var q=5;
// var e=6;
// console.log(theBiggest(q,e));

// // the invoked function 
// var thesmallest = (function(){
// var butter
// a<b ? butter=["the first is smaller: ",a] : butter =["the second is smaller: ", b];
// console.log(butter);
// return butter;

// })()

// // or 
// // we can defind two var here and then assign them at the end of the fucntion
// var thesmallest = (function(g,j){
// var butter
// g<j ? butter=["the first is smaller: ",g] : butter =["the second is smaller: ", j];
// return butter;
// })(30,20)

// console.log(thesmallest);



// //Example:
// var equality = function(o,p){
// var equal;
// o==p ? equal=["yes they are equal, ", "the first and the second number are: ",o] : equal=["they are not equal: ",o,p];
// return equal
// }
// var l=8, n=8;
// console.log(equality(l,n)); 

// //another example :
// function theNoneEquality(z,x){
// var nonequal;
// z!=x ? nonequal=["yes they are not equal",z, " ",x] : nonequal["they are equal ",z,"=",x];
// //to make the array as one line without commas we can use this:
// var array = nonequal.join(" ");
// return array;
// }
// console.log(theNoneEquality(l,a));