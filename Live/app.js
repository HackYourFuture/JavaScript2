'use strict';

function main() {
  let examplesDiv = document.getElementById('examples');
  console.log(examplesDiv);

  let linkElems = document.getElementsByTagName('a');
  console.log(linkElems);

  let linkElems2 = document.querySelectorAll('a');
  console.log(linkElems2);

  let firstlinkElem = document.querySelector('a');
  console.log(firstlinkElem);
  const herfValue = firstlinkElem.getAttribute('href');
  console.log(herfValue);
}

window.onload = main;
