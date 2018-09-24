"use strict";

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
console.log("for", repeatStringNumTimesWithFor("abc", 3));
// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let result = "";
  while (num > 0) {
    result += str;
    num--;
  }
  str = result;
  return str;
}
console.log("while", repeatStringNumTimesWithWhile("abc", 3));
// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let result = "";
  do {
    result += str;
    num--;
  } while (num > 0);
  str = result;
  return str;
}
console.log("do while", repeatStringNumTimesWithDoWhile("abc", 3));
// sligthly modified polyfill .repeat from ES6
function extra(str, num) {
  let validValue = num >> 0;
  if (validValue !== 0) {
    const stringLength = str.length;
    if (stringLength !== 0) {
      if (validValue > 0) {
        str += Array(++validValue).join(str);
      }
    }
  }
  return str;
}
console.log("do extra", extra("abc", 3));
