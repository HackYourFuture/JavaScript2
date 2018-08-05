'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // repeat after me
  let x = "";
  for (let i=num; i>0; --i){
   x += str
  }
   return x;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
 let x = ""
  while(num>0){
    num--
    x += str;
 }
  return x;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let x =""
  do {
    x += str;
    num--
  } while(num>0)
  return x;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));


//bonus
let solutionWithFunction = (str,num) => {
    if (num < 0)
    return str =""
    if (num == 1)
      return str
    else {
      return str + solutionWithFunction(str,num-1)

  }
}
console.log('bonus', solutionWithFunction('abc', 3));