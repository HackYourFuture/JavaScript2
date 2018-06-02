'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let times = 0;
  let text = "";

  for (times = 0; times < num; times++) {
    text = text + str;
  }
  return text;
}
console.log(repeatStringNumTimesWithFor("abc", 3));
console.log(repeatStringNumTimesWithFor("abc", -4));

repeatStringNumTimesWithFor("abc", 3);


// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let times = 0;
  let text = "";

  while (times < num) {
    times += 1;
    text = text + str;
  }
  return text;
}
console.log(repeatStringNumTimesWithWhile("abc", 3));
console.log(repeatStringNumTimesWithWhile("abc", -1));

console.log("while", repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let times = 0;
  let text = "";
  if (num <= 0) {
    return "";
  }
  do {
    text = text + str;
    times += 1;
  }
  while (times < num);
  return text;
}
console.log(repeatStringNumTimesWithDoWhile("abc", 3));
console.log(repeatStringNumTimesWithDoWhile("abc", -1));

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
