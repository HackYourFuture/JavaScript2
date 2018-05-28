'use strict';

function threeFive(startIndex, stopIndex, sayThree, sayFive) {

  const values = [];

  for (let i = startIndex; i <= stopIndex; i++) {

    values.push(i);

  }

  console.log('Our values array is ' + values);

  for (const num of values) {

    if (num % 3 === 0) sayThree(num);
    if (num % 5 === 0) sayFive(num);

  }

}

threeFive(10, 20, sayThree, sayFive);

function sayThree(num) {
  console.log(num + ' is divisible by three');
}

function sayFive(num) {
  console.log(num + ' is divisible by five');
}
