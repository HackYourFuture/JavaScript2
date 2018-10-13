'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  if (num !== 'number' || num < 1) {
    return '';
  }
  const myStr = str;
  for (let i = 1; i < num; i++) {
    str += myStr;
  }
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  if (num !== 'number' || num < 1) {
    return '';
  }
  let myStr = '';

  while (num > 0) {
    myStr += str;
    num--;
  }
  return myStr;

}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  if (num !== 'number' || num < 1) {
    return '';
  }
  const myStr = str;
  let i = 1;
  do {
    str += myStr;
    i++;
  } while (i < num);


  return str;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
