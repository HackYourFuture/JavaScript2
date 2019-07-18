'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // repeat after me
  let repeatString = '';

  for (; num > 0; ) {
    repeatString += str;
    num--;
  }
  return repeatString;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // repeat after me
  let repeatString = '';

  while (num > 0) {
    repeatString += str;
    num--;
  }
  return repeatString;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // repeat after me
  let repeatString = '';
  do {
    repeatString += str;
    num--;
  } while (num > 0);
  if (num < 0) {
    return '';
  }
  return repeatString;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
