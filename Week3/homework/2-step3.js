'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];

  let arr;
  if (startIndex > stopIndex) {
    arr = startIndex - stopIndex;
    for (let i = 0; i <= arr; i++) {
      values[i] = stopIndex;

      stopIndex++;
    }
  } else if (startIndex < stopIndex) {
    arr = stopIndex - startIndex;
    for (let i = 0; i <= arr; i++) {
      values[i] = startIndex;

      startIndex++;
    }

  } console.log(values);


  for (let i = 0; i < values.length; i++) {
    const y = values[i];
    if (y % 3 === 0 && y % 5 === 0) {
      threeCallback();
      fiveCallback();
    } else if (y % 3 === 0) {
      threeCallback();
    } else if (y % 5 === 0) {
      fiveCallback();
    }


  }
}
function three() {
  console.log("three");
}
function five() {
  console.log("five");
}


threeFive(10, 15, three, five);

