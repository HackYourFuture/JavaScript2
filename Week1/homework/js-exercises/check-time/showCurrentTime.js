'use strict'
let paragraph = document.createElement("p");
paragraph.setAttribute("id", "clock");
document.body.appendChild(paragraph);

let timeWriter = setInterval(myFunction, 1000);

function myFunction() {
    const nd = new Date();
    const timeStr = nd.toLocaleTimeString();
    document.getElementById("clock").innerHTML = timeStr;
}