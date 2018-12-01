'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  
    number = str ;
    
    
    if(num>=0){
    
    for(let i=0 ; i<num ; i++){
    
     number = number + str ;
    
    }    
    }
    
      return number;
    }
    
    repeatStringNumTimes("abc", 3);
  return str;


console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  return str;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
