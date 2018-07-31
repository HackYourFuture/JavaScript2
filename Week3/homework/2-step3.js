'use strict';
function sayThree() {
  return 'sayThree';
}
function sayFive() {
  return 'sayFive';
}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  const temp = stopIndex - startIndex;
  const outputArr = [];
  for (let i = 0; i <= temp; i++) {
    values[i] = startIndex;
    startIndex++;
  }
  const results = values.filter(value => value % 3 === 0 || value % 5 ===0);
  results.forEach(result => {
    if (result % 3 === 0 && result % 5 !== 0) {
      outputArr.push(threeCallback());
    } else if (result % 3 !== 0 && result % 5 === 0) {
      outputArr.push(fiveCallback());
    } else if (result % 3 === 0 && result % 5 === 0) {
      outputArr.push(threeCallback());
      outputArr.push(fiveCallback());
    }
  });
  outputArr.forEach(element => console.log(element));
}

threeFive(10, 15, sayThree, sayFive);
