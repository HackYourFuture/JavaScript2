"use strict";

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let repeatedString = "";
  for (let i = 0; i < num; i++) {
    if (num < 0) {
      repeatedString = "";
    } else {
      repeatedString += str;
    }
  }
  return repeatedString;
}
console.log("for", repeatStringNumTimesWithFor("abc", 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let repeatedString = "";
  while (num > 0) {
    repeatedString += str;
    num--;
  }
  if (num < 0) {
    repeatedString = "";
  }
  return repeatedString;
}
console.log("while", repeatStringNumTimesWithWhile("abc", 5));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let repeatedString = "";
  do {
    repeatedString += str;
    num--;
  } while (num > 0);
  return repeatedString;
}
console.log("while", repeatStringNumTimesWithDoWhile("abc", -7));
