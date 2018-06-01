'use strict';

function repeatStringNumTimesWithFor(str, num) {

  let strRepeated = '';

  for (let i = 0; i < num; i++) {
    strRepeated += str;
  }

  return strRepeated;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {

  let accumulatedStr = '';

  do {
    accumulatedStr += str;
    num--;
  }
  while (num > 0);

  return accumulatedStr;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
