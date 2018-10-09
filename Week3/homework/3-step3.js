'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let newStr = "";
  if (num >= 1) {
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let newStr = "";
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let newStr = "";
  if (num > 0)
    do {
      num--;
      newStr += str;
    } while (num > 0)
  return newStr;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
