'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let string = "";
  for (let i = 0; i < num; i++) {
    string += str;
  }
  return string;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  while (num > 0) {
    string += str;
    num--;
  }
  return string;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  /* this code is not working, i still
  struggling with do...while loop */
  string = '';
   do {
     string += str;
     num--;
   } while (num > n);
  return string;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
