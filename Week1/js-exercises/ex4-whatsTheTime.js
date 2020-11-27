/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */


 let viewTime = document.createElement('div');

function displayCurrentTime () {

  let today = new Date();

  let sec = today.getSeconds();
  let min = today.getMinutes();
  let hou = today.getHours();

  if( sec<10 ){
      sec = '0' + sec;
  };

  if( min<10 ){
    min = '0' + min;
  };

  if( hou<10 ){
    hou = '0' + hou;
  };



  
  viewTime.textContent ="Current Time Is ( " + hou + ":" + min + ":" + sec + " )";
  
  document.body.appendChild(viewTime);
}

window.onload = function() {
  setInterval(displayCurrentTime, 1000);
}
