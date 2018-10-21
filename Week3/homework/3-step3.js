'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  let repStr = " ";
  for (let i = 0; i < num; i++) {
    repStr += str;
  }
  return repStr;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  let repStr = " ";
  while (num > 0) {
    repStr += str;
    num--;
  }
  return repStr;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  let repStr = " ";
  let i = 0;
  do {
    repStr += str;
    i++;
  } while (i < num);
  return repStr;
}

console.log('do while', repeatStringNumTimesWithDoWhile('abc', 3));
