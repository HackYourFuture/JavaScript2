'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  var repeatedStr = "";
  for (let i = 0; i < num; i++) {
    repeatedStr += str
  }
  return repeatedStr;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));//for abcabcabc

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let reapStr = "";
  let i = 0;
  while (i < num) {
    reapStr += str;
    i++;
  }
  return reapStr;
}
console.log('while', repeatStringNumTimesWithWhile('abc', 3));//while abcabcabc

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let repStr = "";
  let i = 0;
  do {
    repStr += str;
    i++;
  }
  while (i < num);
  return repStr;
}
console.log('do...while', repeatStringNumTimesWithDoWhile('abc', 3));//do...while abcabcabc
