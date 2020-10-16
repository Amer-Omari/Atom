

var  logo = document.querySelector(".Mylogo"),
 trigger = document.querySelector('.hamburger'),
 wholeConent = document.querySelector('#page-content-wrapper');
//sidebar work

$(document).ready(function () {

    var  overlay = document.querySelector('.overlay'),
      wholebody = document.getElementsByTagName("BODY")[0],
      wrapper = document.querySelector('#wrapper'),
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

  });

  //**make the sidebar close when click anywhere on the conent***////
  function closeNav(e){
    e.preventDefault();
    wrapper.classList.remove("toggled");
  };
   wholeConent.addEventListener("click",closeNav,false);
  /**end of sidebar close*///

});
//sidebar end


// Make the logo disapear once the nave open
function getLogo(e) {
    e.preventDefault();
    logo.classList.toggle("hide");
}
function retrivelogo(q) {
    q.preventDefault();
    logo.classList.remove("hide");
}
trigger.addEventListener("click",getLogo,false);
   wholeConent.addEventListener("click",retrivelogo,false);
//done with the logo disapearing
