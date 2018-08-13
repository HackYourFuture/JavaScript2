'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let x = '';
  for (let i = 0; i < num; i++) {
    x = x + str;
  }
  return x;

}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let x = '';
  while (num > 0) { x = x + str; num--; }
  return x;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let x = '';
  do { x = x + str; num--; }
  while (num > 0);
  return x;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
