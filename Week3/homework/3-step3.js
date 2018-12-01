'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  if (num < 0) {
    str = "";
  } else {
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
    str = repeatedString;
  }
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  if (num < 0) {
    str = "";
  } else {
    let repeatedString = "";
    let i = 0;
    while (i < num) {
      repeatedString += str;
      i++;
    }
    str = repeatedString;
  }
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  if (num < 0) {
    str = "";
  } else {
    let repeatedString = "";
    let i = 0;
    do {
      repeatedString += str;
      i++;
    } while (i < num);
    str = repeatedString;
  }
  return str;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));

