/**
 
 ** Exercise 3: The logo hijack **
 
 No homepage is safe from the logo bandit!Everytime he sees a Google Logo he replaces it with a logo from HackYourfuture instead: https: //www.hackyourfuture.dk/static/logo-dark.svg.

 In this exercise you 're expected to write a JavaScript function that can be executed in the console of the [Google website](https://www.google.com).

 
 1. Find out how to select the element that contains the Google logo, and store it in a variable.
 2. Modify the source and sourceset of the logo so that it 's replaced by the HackYourFuture logo instead.

 */

function hijackGoogleLogo() {
  // your code goes in here
  const googleLogo = document.getElementById('hplogo');
  googleLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleLogo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}

hijackGoogleLogo();