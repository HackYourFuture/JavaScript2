'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  for (let i = 0; i < str.length; i++) {
  result += str;
    num--; // the new value of result is the repeated string (num) times
  }

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3)); // repeatStringNumTimesWithFor("abc", 3) ==>> "abcabcabc"

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  while (num > 0) {
    result += str;
    num--;
  }
  console.log(result);
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  do {
    result += str; // the new value of result is the repeated string (num) times
    num--;
  } while (num > 0);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
