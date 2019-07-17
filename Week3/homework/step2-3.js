'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let result = '""';
  if (num <= 0) {
    return result;
  }
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  console.log(result);
  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 0));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let result = '""';
  if (num <= 0) {
    return result;
  }
  let i = 1;
  while (i <= num) {
    result += str;
    i++;
  }
  // console.log(result);
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 4));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let result = '""';
  if (num <= 0) {
    return result;
  }
  let i = 1;
  do {
    result += str;
    i++;
  } while (i <= num);
  // console.log(result);
  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 1));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
  // eslint-disable-next-line prettier/prettier
};