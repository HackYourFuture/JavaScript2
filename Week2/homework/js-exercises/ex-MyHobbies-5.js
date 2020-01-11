'use strict';

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

let ulElement = document.createElement('ul');

myHobbies.forEach(function(el) {
  let li = document.createElement('li');
  let text = document.createTextNode(el);
  li.appendChild(text);
  ulElement.appendChild(li);
  document.body.appendChild(ulElement);
});