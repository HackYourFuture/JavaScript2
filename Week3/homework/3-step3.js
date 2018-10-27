'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  const origStr = str;
  for (let i = 1; i < num; i++) {
    str += origStr;
  }
  return str;
}


console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  const origStr = str;
  let i = 1;
  while (i < num) {
    str += origStr;
    i++;
  }
  return str;
}


console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  const origStr = str;
  let i = 1;
  do {
    str += origStr;
    i++;
  } while (i < num);
  return str;
}


console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
