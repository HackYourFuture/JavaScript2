'use strict';


function repeatStringNumTimesWithFor(str, num) {
  let stringAccumlator = '';

  for (let i = 0; i < num; i++) {
    stringAccumlator += str;
  }

  return stringAccumlator;

}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {

  let stringAccumlator = '';
  while (num > 0) {
    stringAccumlator += str;
    num--;
  }
  return stringAccumlator;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let stringAccumlator = ''
  do {
    stringAccumlator += str;
    num--;
  }
  while (num > 0);
  return stringAccumlator;
}

console.log('Do while', repeatStringNumTimesWithDoWhile('abc', 3));