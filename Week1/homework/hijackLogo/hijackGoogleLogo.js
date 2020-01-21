function hijackGoogleLogo() {
    var logo = document.getElementById("hplogo");
    logo.src = "https://www.hackyourfuture.dk/static/logo-dark.svg"
    logo.srcset = "https://www.hackyourfuture.dk/static/logo-dark.svg";
    logo.removeAttribute("onload");
    logo.removeAttribute("data-iml");
    logo.removeAttribute("data-atf");
  }
  
  
  
  hijackGoogleLogo();
  