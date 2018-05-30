'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  if (num < 0) {
    console.log('num is negative');
    str = '';
  }
  else {
    let temp = '';
    for (let i = 0; i < num; i++) {
      temp = temp + str;
    }
    str = temp;
  }
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  if (num < 0) {
    console.log('num is negative');
    str = '';
  }
  else {
    let temp = '';
    while (num > 0) {
      temp = temp + str;
      num--;
    }
    str = temp;
  }
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  if (num < 0) {
    console.log('num is negative');
    str = '';
  }
  else {
    let temp = '';
    do {
      temp = temp + str;
      num--;
    } while (num > 0);
    str = temp;
  }
  return str;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
