'use strict';

function changeGoogleLogo() {
  const logo = document.querySelector('#hplogo');

  logo.setAttribute('srcset', 'https://www.hackyourfuture.dk/static/logo-dark.svg');
}

changeGoogleLogo();
