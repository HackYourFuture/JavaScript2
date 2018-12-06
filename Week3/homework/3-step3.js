'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let collectString = '';

  for (let i = 0; i < num; i++) {
    collectString += str;
  }
  return collectString;

  // return str;
}

console.log('for loop =>', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let collectString = '';

  while (num > 0) {
    collectString += str;
    num--;
  }
  return collectString;
}

console.log('while loop =>', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let collectString = '';
  do {
    collectString += str;
    num--;
  } while (num > 0);

  return collectString;
}

console.log('do while loop =>', repeatStringNumTimesWithDoWhile('abc', 3));
