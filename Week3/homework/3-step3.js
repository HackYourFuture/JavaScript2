'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let x = "";
  if (num <= 0) {
    str = "";
  } else {
    for (let i = 0; i < num; i++) {
      x += str;
    }
    str = x;
  }
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let x = "";
  if (num <= 0) {
    str = "";
  } else {
    while (num > 0) {
      x += str;
      num--;
    }
    str = x;
  }
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let x = "";
  if (num <= 0) {
    str = "";
  } else {
    do {
      x += str;
      num--;
    } while (num > 0)
    str = x;
  }
  return str;
}

console.log('do while', repeatStringNumTimesWithDoWhile('abc', 3));
