'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let value = "";
  for (let i = 0; i < num; i++) {
    if (num >= 0) {
      value += str;
    } else {
      return str = "";
    }
  }
  str = value;
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let i = 0;
  let value = "";
  while (i < num) {
    if (num >= 0) {
      value += str;
      i++;
    } else {
      return str = "";
    }
  }
  str = value;
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let i = 0;
  let value = "";
  do {
    if (num >= 0) {
      value += str;
      i++;
    } else {
      return str = "";
    }
  }
  while (i < num);
  str = value;
  return str;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
