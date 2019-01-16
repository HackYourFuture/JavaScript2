'use strict';

function main() {
  const examplesDiv = document.getElementById('example');
  console.log(examplesDiv.textContent);

  const linkElems1 = document.getElementsByTagName('a');
  console.log(linkElems1);

  const linkElems2 = document.querySelectorAll('a')
  console.log(linkElems2);
  const firstLinkElem = document.querySelector('a');
  console.log(firstLinkElem);

  const hrefValue = firstLinkElem.getAttribute('href');
  console.log(hrefValue);
}
window.onload = main;