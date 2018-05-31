'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let returnedString = '';

  if (num < 0) {
    return returnedString;
  } else if (num >= 0) {
    for (let i = 0; i < num; i++) {
      returnedString += ' ' + str;
    }
    return returnedString;
  }
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let returnedString = '';

  if (num < 0) {
    return returnedString;
  } else if (num >= 0) {
    let i = 0;
    while (i < num) {
      returnedString += ' ' + str;
      i++;
    }
    return returnedString;
  }
}
console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let returnedString = '';

  if (num < 0) {
    return returnedString;
  } else if (num >= 0) {
    let i = 0;
    do {
      returnedString += ' ' + str;
      i++;
    } while (i < num);

    return returnedString;
  }
}
console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
