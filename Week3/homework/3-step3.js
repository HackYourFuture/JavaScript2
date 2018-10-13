'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  if (num < 1) {
    return "";
  }
  const collect = str;
  for (let i = 1; i < num; i++) {
    str = str + collect;
  }
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop

function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  if (num < 1) {
    return "";
  }
  const collect = str;
  let i = 1;
  while (i < num) {
    str = str + collect;
    i++;
  }
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  if (num < 1) {
    return "";
  }
  const collect = str;
  let i = 1;
  do {
    str = str + collect;
    i++;
  } while (i < num);
  return str;
}

console.log('do while', repeatStringNumTimesWithDoWhile('abc', 3));
