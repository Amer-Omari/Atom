
//sidebar work
$(document).ready(function () {
  var trigger = document.querySelector('.hamburger'),
      overlay = document.querySelector('.overlay'),
     isClosed = false;



    trigger.click(function () {
      Sidebar_cross();


    });

    function Sidebar_cross() {

      if (isClosed == true) {

        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;


      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
         console.log(isClosed);
      }
  }




  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});
//sidebar end
// Make the logo disapear once the nave open
var  logo = document.querySelector(".Mylogo");
var trigger = document.querySelector('.hamburger');



function getLogo(e) {
    e.preventDefault();
    logo.classList.toggle("hide");
}
trigger.addEventListener("click",getLogo,false);

//done with the logo disapearing
