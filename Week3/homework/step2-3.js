'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line
  let result = '';

  if (num > 0) {
    // eslint-disable-next-line for-direction
    for (let i = 0; i < num; i++) {
      result += str;
    }
  }

  // // Replace this comment and the next line with your code
  // console.log(str, num, result);

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line
  let result = '';

  if (num > 0) {
    let i = 0;
    // eslint-disable-next-line for-direction
    while (i < num) {
      result += str;
      i++;
    }
  }

  // // Replace this comment and the next line with your code
  // console.log(str, num, result);

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line
  let result = '';

  if (num > 0) {
    let i = 0;
    do {
      result += str;
      i++;
    } while (i < num);
  }

  // // Replace this comment and the next line with your code
  // console.log(str, num, result);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile
};
