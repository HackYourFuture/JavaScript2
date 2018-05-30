'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let repeatStringFor = '';

  for (let i = 0; i < num; i++) {
    repeatStringFor += str;
  }

  return repeatStringFor;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let repeatStringWhile = "";

  while (num > 0) {
    repeatStringWhile += str;
    num--;
  }

  return repeatStringWhile;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let repeatStringDoWhile = "";

  do {
    repeatStringDoWhile += str;
    num--;
  } while (num > 0);

  return repeatStringDoWhile;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
