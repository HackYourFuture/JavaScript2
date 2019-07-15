'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  while (num > 0) {
    num--;
    result += str;
  }
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  do {
    if (num === 3) {
      result += str;
    } else if (num === 2) {
      result += str;
    } else if (num === 1) {
      result += str;
    } else {
      result = '';
    }
    num--;
  } while (num > 0);
  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// // Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
