'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let myString = "";
  if (num <= 0) {
    return myString
  } else {
    for (let i = 0; i < num; i++) {
      myString += str;
    }
  }
  return myString;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let myStr = "";
  if (num <= 0) {
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
  if (num <= 0) {
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


console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
