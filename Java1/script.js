// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    /********************************/
    function sayHello (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "Leen" || name==="leen") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title = "Wow Leen!!";
        document
            .querySelector("h1")
            .textContent = title;
            message = "<h2>Oh sweet " + name + " is here!!! </h2>";
             document
        .getElementById("content")
        .innerHTML = message;


      }

    }
/*************************************************/
function sayhi (event) {
this.textContent = "done!";
var aname = document.getElementById("name1").value;
var message3 = "<h2> Hello " + aname + "!</h2>";
document.getElementById("content2").innerHTML = message3;

if (aname === "Amer" || aname === "amer") {

var atitle = document.querySelector("#title").textContent;
atitle = "mmm it's just Amer";
document.querySelector("h1").textContent = atitle;
message3 = "<h2> ogh " + aname + " stupid! </h2>";
document.getElementById("content2").innerHTML = message3;




}














}




 document.querySelector("#button2")
      .addEventListener("click", sayhi);




/***********************************************/

    // Unobtrusive event binding
    document.querySelector("#button1")
      .addEventListener("click", sayHello);


/***************************************************/

       document.querySelector("body").addEventListener("mousemove" , function(event) {
       	if (event.shiftKey===true){
    	console.log("x: " +event.clientX);
    	console.log("y: " +event.clientY);
    }
    }
    );
/************************************************
 function stop (event) {
     var message1 = "stop moving your mouse";
     var message2 = "<p>Say hello to <button>Okay!</button></p>"
  document.getElementById("content1").innerHTML = message1;
  document.querySelector("p").innerHTML = message2; 
  }
 


document.querySelector("body").addEventListener("mousemove" , stop);

*/



  }
);



// document.querySelector("button")
//   .onclick = sayHello;