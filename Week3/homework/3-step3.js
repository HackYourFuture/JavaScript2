'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let repeatStr = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      repeatStr += str;
    }
    return repeatStr;
  } else {
    return repeatStr;
  }
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let repeatStr = "";
  if (num >= 0) {
    while (num) {
      repeatStr += str;
      num--;
    }
    return repeatStr;
  } else {
    return repeatStr;
  }
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let repeatStr = "";
  if (num >= 0) {
    do {
      repeatStr += str;
      num--;
    }
    while (num);
    return repeatStr
  } else {
    return repeatStr;
  }
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));