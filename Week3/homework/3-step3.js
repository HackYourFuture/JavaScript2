'use strict';

// if num <= 0 return an empty string
// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let repeatedStr = '';

  for (let i = num; i > 0; i--) {
    repeatedStr += str;
  }

  return repeatedStr;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let repeatedStr = '';

  while (num > 0) {
    repeatedStr += str;
    num--;
  }

  return repeatedStr;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let repeatedStr = '';

  if (num <= 0) {
    return repeatedStr;
  }

  do {
    repeatedStr += str;
    num--;
  } while (num > 0);

  return repeatedStr;
}

console.log('do..while', repeatStringNumTimesWithDoWhile('abc', 3));
