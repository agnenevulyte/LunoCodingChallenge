// collapse menu
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    var element = document.getElementById("logo-box-id");
    element.classList.add("compressed");
  } else {
    var element = document.getElementById("logo-box-id");
    element.classList.remove("compressed");
  }
}



// Validate google reCaptcha
var checkCaptcha;
function login_captcha()
  {
    console.log("captcha");
    $("#error-captcha").empty();
    //checkCaptcha = true;
    if(checkCaptcha) {
      $("#submitBtn").click();
      }
      else {
      console.log("insert captcha");
      $("#error-captcha").append('<div class="parsley-errors-list filled" id="parsley-id-5"><span class="parsley-type">Please Insert the Captcha.</span></div>');
    }
  }
function recaptchaCallback() {
//alert("callback working");
  checkCaptcha = true;
  $("#error-captcha").empty();
  };
  $(document).ready(function(){
  var checkCaptcha = false;
  $("#error-captcha").empty();
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("logo-box-id").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("logo-box-id").style.display = "block";
  }