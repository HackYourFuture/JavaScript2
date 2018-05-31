'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {

    values.push(i);

    if (i % 3 === 0 && i % 5 === 0) {  // here the order of checking is important.
      sayThree();
      sayFive();
    } else if (i % 3 === 0) {
      sayThree();
    } else if (i % 5 === 0) {
      sayFive();
    }

  }
  console.log(values); // just to print out the array when the programme run
  return values;

}

function sayThree() {
  console.log("I am Three");
}

function sayFive() {
  console.log("I am Five");
}

threeFive(10, 15, sayThree, sayFive);
