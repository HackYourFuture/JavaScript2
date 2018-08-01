'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let myStr = "";
  if (num < 1) {
    return myStr;
  } else {
    for (let i = 0; i < num; i++) {
      myStr += str;
    }
  }
  return myStr;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let myStr = "";
  if (num < 1) {
    return myStr;
  } else {
    let i = 0;
    while (i < num) {
      myStr += str;
      i++
    }
  }
  return myStr;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let myStr = "";
  if (num < 1) {
    return myStr;
  } else {
    let i = 0;
    do {
      myStr += str;
      i++
    } while (i < num)
  }
  return myStr;
}

console.log('do...while', repeatStringNumTimesWithDoWhile('abc', 3));
