// No homepage is safe from the logo bandit! 
// Everytime he sees a Google Logo he replaces it with a logo from HackYourfuture 
// instead: https://www.hackyourfuture.dk/static/logo-dark.svg.
// In this exercise you're expected to write a JavaScript function that can be executed in the console 
// of the Google website.
// Inside a JavaScript file, called hijackGoogleLogo.js, create a function called hijackGoogleLogo
// Find out how to select the element that contains the Google logo, and store it in a variable
// Modify the source and source set of the logo so that it's replaced by the HackYourFuture logo instead

'use strict';


function hijackGoogleLogo() {

  const hackYourFutureLogoUrl = 'https://www.hackyourfuture.dk/static/logo-dark.svg';

  const logo = document.getElementById('hplogo');

  // logo.src = hackYourFutureLogoUrl;
  logo.srcset = hackYourFutureLogoUrl;
}

hijackGoogleLogo();