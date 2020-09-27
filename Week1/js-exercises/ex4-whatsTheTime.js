/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */
const body = document.body;
const heading = document.createElement('h1');
body.appendChild(heading);
heading.innerText = 'The current time is:';
heading.style.cssText = 'text-align: center;';
const clock = document.createElement('p');
heading.appendChild(clock);

('use strict');
function displayCurrentTime() {
  // your code goes in here
  const date = new Date();
  const time = date.toLocaleTimeString();
  clock.innerText = time;
  clock.style.cssText =
    'border: 2px solid; padding: 1rem; font-size: 2rem; text-align: center; margin: 1rem 10rem;';
}
setInterval(displayCurrentTime, 1000);
window.onload = displayCurrentTime;
