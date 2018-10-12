"use strict";

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  if (num <= 0) return "";
  else {
    let result = "";
    for (let i = 0; i < num; i++) {
      result += str;
    }
    return result;
  }
}

repeatStringNumTimesWithFor("abc", 3);

console.log("for", repeatStringNumTimesWithFor("abc", 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  if (num <= 0) {
    return "";
  } else {
    let repeatedStr = "";
    let i = 0;
    while (i < num) {
      repeatedStr += str;
      i++;
    }
    return repeatedStr;
  }
}
console.log("while", repeatStringNumTimesWithWhile("abc", 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  if (num <= 0) {
    return "";
  } else {
    let repeatedStr = "";
    let i = 0;
    do {
      i++;
      repeatedStr += str;
    } while (i < num);
    return repeatedStr;
  }
}
console.log("while", repeatStringNumTimesWithDoWhile("abc", 3));
