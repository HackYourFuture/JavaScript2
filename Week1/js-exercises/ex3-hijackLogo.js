/**
 
 ** Exercise 3: The logo hijack **
 
 No homepage is safe from the logo bandit!Everytime he sees a Google Logo he replaces it with a logo from 

 In this exercise you 're expected to write a JavaScript function that can be executed in the console of the [Google website](https://www.google.com).

 
 1. Find out how to select the element that contains the Google logo, and store it in a variable.
 2. Modify the source and sourceset of the logo so that it 's replaced by the HackYourFuture logo instead.

 */

function hijackGoogleLogo() {

let parent = document.getElementById('lga');

let gImage = document.getElementById("hplogo");
gImage.style.display = 'none';

parent.style.backgroundImage = "url('https://www.hackyourfuture.dk/static/logo-dark.svg')";
parent.style.backgroundRepeat = 'no-repeat';
parent.style.backgroundPosition = 'center';

}

hijackGoogleLogo();



