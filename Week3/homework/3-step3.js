'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {

  let myStr = '';

  for (let i = num; i > 0; i--) {
    myStr += str;
  }
  return myStr;
}

repeatStringNumTimesWithFor("abc", 3);

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {

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

  let myStr = '';

  if (num > 0) {
    do {
      myStr += str;
      num--;
    } while (num > 0);
  }

  return myStr;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));
