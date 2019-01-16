'use strict';

function main() {
  // const examplesDiv = document.getElementById('examples');
  // console.log(examplesDiv);

  const firstLinkElem = document.querySelector('a');
  console.log(firstLinkElem.getAttribute('href'));
  console.log(firstLinkElem.href);

  const paraElements = document.getElementsByTagName('p');
  for (let i = 0; i < paraElements.length; i++) {
    const customAttribValue = paraElements[i].getAttribute('data-classified');
    if (customAttribValue === 'secret') {
      paraElements[i].style.display = 'none';
    }
  }
}

window.onload = main;
