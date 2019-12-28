'use strict';
const googleLogo = document.getElementById('hplogo');

function hijackGoogleLogo() {
	googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
	googleLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}
hijackGoogleLogo();
