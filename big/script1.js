

var  logo = document.querySelector(".Mylogo"),
 trigger = document.querySelector('.hamburger'),
 mainPageContent=document.querySelector("#mainPageContent"),
 wholeConent = document.querySelector('#page-content-wrapper'),
 footer = document.querySelector(".page-footer");

//sidebar work

$(document).ready(function () {

    var  overlay = document.querySelector('.overlay'),

      wholebody = document.getElementsByTagName("BODY")[0],
      wrapper = document.querySelector('#wrapper'),
      wrapperFooter = document.querySelector('#wrapper-footer'),
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

      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
          $('#wrapper-footer').toggleClass('toggled');




  });

  //**make the sidebar close when click anywhere on the conent***////
  function closeNav(e){

    wrapper.classList.remove("toggled");

  };
   wholeConent.addEventListener("click",closeNav,false);
   mainPageContent.addEventListener("click",closeNav,false);
    footer.addEventListener("click",closeNav,false);
  /**end of sidebar close*///

  //when you scroll down
// function deletebutton (g){
//   var deleteham = trigger;
// deleteham.remove();
// }
//
//
// window.addEventListener("scroll",deletebutton,false);


  //end scroll down

});
//sidebar end


// Make the logo disapear once the nave open
function getLogo(e) {

    logo.classList.toggle("hide");
}
function retrivelogo(q) {
  
    logo.classList.remove("hide");
}
trigger.addEventListener("click",getLogo,false);
   wholeConent.addEventListener("click",retrivelogo,false);
  mainPageContent.addEventListener("click",retrivelogo,false);
  footer.addEventListener("click",retrivelogo,false);
//done with the logo disapearing
