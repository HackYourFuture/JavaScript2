'use strict';

{
  function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const values = [];
    for (let i = startIndex; i <= stopIndex; i++) {
      values.push(i);
    }

    values.forEach(num => {
      if (num % 3 === 0)
        threeCallback(num);
      if (num % 5 === 0)
        fiveCallback(num);
    });

  }

  function sayThree(num) {
    console.log('The number ' + num + ' is dividable by 3');
  }
  function sayFive(num) {
    console.log('The number ' + num + ' is dividable by 5');
  }
  threeFive(10, 15, sayThree, sayFive);

}
