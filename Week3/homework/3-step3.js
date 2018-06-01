'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let outPut = '';
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      outPut += str;
    }
  }
  return outPut;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let outPut = '';
  if (num > 0) {
    let i = 0;
    while (num > i) {
      outPut += str;
      i++;
    }
  }
  return outPut;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let outPut = '';
  if (num > 0) {
    let i = 0;
    do {
      outPut += str;
      i++;
    } while (i < num);
  }
  return outPut;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
