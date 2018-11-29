'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {  
  const values = [];
  // Add your code here

  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  // console.log(values);
    for (let i = 0; i <= values.length; i++) {
      if (values[i] % 3 === 0 && values[i] % 5 === 0) {
        console.log(values[i] + ' is ' + threeCallback() + ' and ' + fiveCallback());
      } else if (values[i] % 3 === 0) {
        console.log(values[i] + ' is ' + threeCallback());
      } else if (values[i] % 5 === 0) {
        console.log(values[i] + ' is ' + fiveCallback());
      }
    }
}

function sayThree() {
  return 'divisible by 3';
}

function sayFive() {
  return 'divisible by 5';
}

threeFive(10, 15, sayThree, sayFive); 
