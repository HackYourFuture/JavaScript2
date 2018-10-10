'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let newStr = str;
  if (num > 0) {
    for (let i = 2; i <= num; i++) {
      str += newStr;
    }
    return str;
  }
  else { return str = "" }
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let newStr = str;
  while (num > 1) {
    str += newStr;
    num--;
  }
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let newStr = str;
  if (num > 1) {
    do {
      num--;
      str += newStr;
    } while (num > 1);
  }
  return str;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
