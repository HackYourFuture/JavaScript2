'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  const repeatArr = [];
  for (let i = 0; i < num; i++) {
    repeatArr.push(str);
  }
  result = repeatArr.join('');

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  const repeatArr = [];
  let i = 0;
  while (i < num) {
    repeatArr.push(str);
    i++;
  }
  result = repeatArr.join('');

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  const repeatArr = [];
  let i = 0;
  do {
    repeatArr.push(str);
    i++;
  } while (i < num);
  result = repeatArr.join('');
  if (num <= 0) {
    result = '';
  }

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
