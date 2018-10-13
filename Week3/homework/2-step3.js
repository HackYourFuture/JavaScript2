'use strict';



function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }

  values.forEach(x => {
    if (x % 3 === 0) {
      threeCallback(x);
    }
    if (x % 5 === 0) {
      fiveCallback(x);
    }
  });

}

function sayThree(num) {
  console.log(num + ' is divisible by 3');
}
function sayFive(num) {
  console.log(num + ' is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);
