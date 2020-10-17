var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


var myA = document.querySelector(".a-button"),
button2=document.querySelector(".a2-button"),
message=document.querySelector(".message"),
button=document.querySelector(".btn");
var input = document.querySelector(".yes-no");

//////////////////////////////////

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    button.click();

  }
});

/////////////////////////////



document.addEventListener("DOMContentLoaded",
  function (event){
function checking (event){
var input = document.querySelector(".yes-no").value;

if (input=="Yes"||input=="yes"){

myA.setAttribute("href","mainpage.html");
}
else{
   if (input=="No"||input=="no"){

myA.setAttribute("class","normally-hidden");
button.setAttribute("class","normally-hidden");

message.classList.remove("normally-hidden");
button2.classList.remove("normally-hidden");

   }
  else {

confirm("please write Yes or No only!");


  }
}

}
document.querySelector(".btn").addEventListener("click", checking);
// button.addEventListener("click",checking,false);
// myA.addEventListener("click",checking,false);









});
