'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let counter = startIndex; counter <= stopIndex; counter++) {
    numbers.push(counter);
  }
  const three = threeCallback(numbers);
  const five = fiveCallback(numbers);
  const both = fiveCallback(threeCallback(numbers));

  return console.log(three, five, both);
  // const three = threeCallback(numbers) || fiveCallback(threeCallback(numbers));
  // const five = fiveCallback(numbers);
  // const three = threeCallback(numbers);
  // const five = fiveCallback(numbers);
  // const klab = fiveCallback(threeCallback(numbers));
  // const klab2 = [threeCallback(fiveCallback(numbers))];

  // console.log(three, five);
  // const threefive2 = three || five;
  // console.log(three, five, threefive2);
  // const sayThreeFive = three.concat(five).sort();
  // console.log(sayThreeFive);
  // const result = [];
  // for (let i = 0; i < sayThreeFive.length; i++) {
  //   if (result.indexOf(sayThreeFive[i]) === -1) {
  //     result.push(sayThreeFive[i]);
  // const result = threeCallback(numbers);
  // const result2 = fiveCallback(numbers);
  // const result3 = result.concat(result2);
  // console.log(result3);
  // const result4 = threeCallback(result3) && fiveCallback(result3);
  // console.log(result, result2, result4);
  // }
  // }
  // console.log(result);
}
//   const result = threeCallback(numbers);
//   const result2 = fiveCallback(numbers);
//   const result3 = threeCallback(numbers) || fiveCallback(numbers);

//   console.log(result, result2, result3);
// }

function sayThree(number) {
  return number.filter(num => num % 3 === 0);
}

function sayFive(number) {
  return number.filter(num => num % 5 === 0);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
