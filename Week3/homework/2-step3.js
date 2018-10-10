'use strict';
function sayThree(number) {
  console.log(number + "  Is divisible by three ");
}
function sayFive(number) {
  console.log(number + "  Is divisible by five");
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (let z = startIndex; z <= stopIndex; z++) {
    values.push(z);
    if (z % 3 === 0) {
      threeCallback(z);
    }
    if (z % 5 === 0) {
      fiveCallback(z);
    }
  }
}

threeFive(10, 15, sayThree, sayFive);
