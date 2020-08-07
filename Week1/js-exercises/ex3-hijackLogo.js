function hijackGoogleLogo() {
  let logo = document.querySelectorAll("img")[1];
  logo.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
}

hijackGoogleLogo();