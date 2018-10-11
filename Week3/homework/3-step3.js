'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
    var reWhStr = "";
      
    for (num ;num > 0;num--) {
      reWhStr += str;
    }
    return reWhStr;
  
  }

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
    var reStr = "";
    while (num > 0) {
      reStr += str;
      num--;
    }
    return reStr;
  }

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
    var reStr = "";
  do { reStr += str; 
    num--;
  }while(num > 0)
  return reStr;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));