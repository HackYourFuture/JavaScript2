'use strict';

// use a 'for' loop

function repeatStringNumTimesWithFor(str, num) {
  let newStr = '';
  for (let i = 0; i < num; i++) {

    newStr += str;
  }
  return newStr;
}


console.log('for', repeatStringNumTimesWithFor('abc', 3));

// // use a 'while' loop

function repeatStringNumTimesWithWhile(str, num) {
  //   // add your code here
  let newString = "";
  while (num > 0) {
    newString += str;
    num--;
  }
  return newString;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop

function repeatStringNumTimesWithDoWhile(str, num) {
  //   // add your code here
  let string = "";
  if (num <= 0) return string;

  do { string += str; num--; }
  while (num > 0);

  return string;
}
console.log('do..while', repeatStringNumTimesWithDoWhile('abc', 3));
