'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  if (num <= 0) {
    return '';
  }

  for (let i = 0; i < num; i++) {
    result = result.concat(str);
  }
  console.log(str, num, result);

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  let i = 0;
  if (num <= 0) {
    return '';
  }

  while (i < num) {
    i++;
    result = result.concat(str);
  }
  // Replace this comment and the next line with your code
  console.log(str, num, result);

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  let i = 0;
  if (num <= 0) {
    return '';
  }

  do {
    i++;
    result = result.concat(str);
  } while (i < num);

  // Replace this comment and the next line with your code
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
