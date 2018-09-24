'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  if(num <= 0) return "";
  let acum = str;
  for(let i = 0; i < num - 1; ++i)
    str += acum;
  return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  if(num <= 0) return "";
  let acum = str; 
  while(num > 1)
    str += acum, num--;
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  if(num <= 0) return "";
  if(num == 1) return str;
  let acum = str;
  do{
    str += acum;
    num--;
  }while(num > 1);
  return str;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
