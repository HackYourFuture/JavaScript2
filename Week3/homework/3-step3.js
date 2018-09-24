"use strict";

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  if (num < 0) {
    return "";
  }
  var myStr = str;
  for (var i = 0; i < num; i++) {
    str += myStr;
  }
  return str;
}

console.log("for", repeatStringNumTimesWithFor("abc", 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  if (num < 0) {
    return "";
  }

  let myStr = str;
  let i = 1;

  while (i < num) {
    str += myStr;
    i++;
  }

  return str;
}

console.log("while", repeatStringNumTimesWithWhile("abc", 3));

// use a 'do...while' loop
function repeatStringNumTimes(str, num) {
  str = num < 0 ? "" : str;
  let newString = "";
  let i = 0;

  do {
    newString += str;
    i++;
  } while (i < num);

  console.log(newString);
}

repeatStringNumTimes("abc", 3);
