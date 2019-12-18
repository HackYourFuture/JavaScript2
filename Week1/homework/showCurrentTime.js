'use strict';

function tellTime() {
  const dt = new Date();
  document.getElementById('time').innerText = dt.toLocaleTimeString();
}

function keepTimeCurrent() {
  setInterval(tellTime, 1000);
}

//window.onload = KeepTimeCurrent;
document.addEventListener('DOMContentLoaded', keepTimeCurrent);
