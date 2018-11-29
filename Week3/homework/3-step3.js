'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  
  let answerStr = "";
  for(let i = 0; i < num; i++) {
    answerStr += str;
  }
  return answerStr;
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));



// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let ansStr = "";
  while(num > 0){
    ansStr += str;
    num--;
  }
  return ansStr;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let repeat = "";
  if(num < 0) return ""; //I used this to pass the challenge on Freecodecamp
    do {
      repeat += str;
      num--;
    } while (num > 0);
  return repeat;
  }
  console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
