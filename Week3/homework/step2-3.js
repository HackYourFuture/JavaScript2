'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let final = '';
  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));

function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let final = '';
  let i = 0;
  while (i < num) {
    final += str;
    i++;
  }
  return final;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let final = '';
  let i = 0;

  do {
    i++;
    final += str;
  } while (i < num);
  return final;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
