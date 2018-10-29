'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here

//filters out all the even numbers ==> returns [1,3]
const oddsFilter = numbers.filter(i => i % 2 != 0)
//doubles the odd numbers only (1,3)
const doubled = oddsFilter.map(i => {
  if (i % 2 != 0) { return i * 2; }
  else { return i; }
});

console.log("the thrown away numbers are: " + oddsFilter);
console.log("The doubled numbers are: " + doubled);


