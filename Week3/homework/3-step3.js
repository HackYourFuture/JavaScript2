'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let things = '';
  for (let i = num;i > 0; i--){
    things = str;
  }
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));
//for abc

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let things = '';
  while (num > 0){
    things = str;
    num--;
  }
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));
//while abc

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let things = '';
  do{
    things = str;
    num--;
  }while (num > 0)
  return str;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
//while abc