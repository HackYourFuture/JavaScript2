'use strict';
// const button = document.getElementById('clickMeButton');
function say(phrase) {
  alert(`** ${phrase} **`);
}
const button = document.createElement('button');
button.innerText = 'call Me';
document.body.appendChild(button);
button.addEventListener('click', function(event) {
  const text = event.target.innerText;
  say(`button called ${text} was clicked`);
});

const divElm = document.createElement('div');

const imgElm = document.createElement('img');
imgElm.src =
  'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg';

divElm.appendChild(imgElm);

document.body.appendChild(divElm);
const paragraph = document.createElement('div');
paragraph.textContent = <p>jheuqgwy</p>;
paragraph.appendChild(divElm);
