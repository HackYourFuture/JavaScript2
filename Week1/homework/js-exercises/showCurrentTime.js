
window.onload = setInterval(startTime, 1000 );


const body = document.querySelector('body');
let currentTime = document.createElement('h1');
currentTime.style = "width: 20%; margin: auto; display: block; text-align: center;"
body.appendChild(currentTime);

function startTime(){ 

    let today = new Date();
    let h = today.getHours();
    let m = correctTime(today.getMinutes()); 
    let s = correctTime(today.getSeconds()); 
    currentTime.innerHTML = h + ":" + m + ":" + s; 
}


function correctTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }
