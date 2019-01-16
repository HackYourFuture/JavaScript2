'use strict';

function main() {
  const root = document.getElementById('root');

  const h1 = document.createElement('h1');
  h1.innerText = 'Hello World';
  root.appendChild(h1);
  console.log(h1)
}

window.onload = main;