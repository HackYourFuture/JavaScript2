'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const  values = [...Array(stopIndex - startIndex + 1).keys()].map(x => x + startIndex);
  values.forEach(x => {
    if(x % 3 === 0)
      threeCallback();
    if(x % 5 === 0)
      fiveCallback();
  });
  // Add your code here
}

threeFive(10, 15, sayThree, sayFive);
