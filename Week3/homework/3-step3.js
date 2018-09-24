'use strict';

// use a 'for' loop

function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  if (num <= 0) return "";
  const repeat = str;
  for (let i = 0; i < num - 1; ++i) // why repeat 4 times ??
    str += repeat;
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  if (num <= 0) return "";
  const repeat = str;
  while (num > 1)
    str += repeat, num--;
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  if (num <= 0) return "";
  if (num === 1) return str;
  const repeat = str;
  do {
    str += repeat;
    num--;
  } while (num > 1);
  return str;
}

console.log('for', repeatStringNumTimesWithDoWhile('abc', 3));
