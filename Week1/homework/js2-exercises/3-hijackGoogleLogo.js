function hijackGoogleLogo () {
    let googleImage=document.querySelector('#hplogo')
    googleImage.src='https://www.hackyourfuture.dk/static/logo-dark.svg'
    googleImage.srcset='https://www.hackyourfuture.dk/static/logo-dark.svg'

}
hijackGoogleLogo ();

// or like this way 
/*
function hijackGoogleLogo() {
  const logo = document.querySelector('#hplogo');
  logo.setAttribute('srcset', 'https://www.hackyourfuture.dk/static/logo-dark.svg');
}

hijackGoogleLogo();*/