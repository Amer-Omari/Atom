const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock(){

var date= new Date();

let hr =date.getHours();
let min =date.getMinutes();
let sec =date.getSeconds();

//these lets will contain the degrees:
let hrPosition = (hr*360/12)+(min*(360/60)/12);
//what we are doing here in the min, that we are deviding the one min into 60 increaments 
// so the min hand can be so accurate 
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;



//here we are applying the number to degrees using inline style
HOURHAND.style.transform= "rotate(" +hrPosition +"deg)";
MINUTEHAND.style.transform= "rotate(" +minPosition +"deg)";
SECONDHAND.style.transform= "rotate(" +secPosition +"deg)";
}

var interval = setInterval(runTheClock, 1000);