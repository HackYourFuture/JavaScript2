function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  numbers.forEach((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      threeCallback();
      fiveCallback();
    }
    else if (num % 5 === 0) {
      fiveCallback();
    } else if (num % 3 === 0) {
      threeCallback();
    }
  })
}

threeFive(10, 15, sayThree, sayFive);
function sayThree() {
  console.log('three');
}
function sayFive() {
  console.log('five');
}

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive


