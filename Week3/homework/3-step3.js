'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let string = '';
  for (let i = 0; i < num; i++) {

    string += ' ' + str;
  }
  return string;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let index = 0;
  let string = '';
  while (index < num) {
    string += ' ' + str;
    index++;
  }
  return string;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let index = 0;
  let string = '';
  do {
    string += ' ' + str;
    index++;
  }
  while (index < num);
  return string;
}

console.log('do while', repeatStringNumTimesWithDoWhile('abc', 3));
