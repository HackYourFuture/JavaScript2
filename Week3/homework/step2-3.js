'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  // Replace this comment and the next line with your code
  for (let i = 0; i < num; i++) {
    result += str;
  }
  console.log(str, num, result);

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  // Replace this comment and the next line with your code
  const i = 0;
  while (i < num) {
    result += str;
  }
  console.log(str, num, result);

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  let i = 0;
  do {
    result = num <= 0 ? result : result + str;
    i++;
  } while (i < num);
  console.log(str, num, result);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
