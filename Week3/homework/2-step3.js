"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  values.push(...Array.from({length: stopIndex - startIndex + 1},(val, index) => index + startIndex));
  values.forEach(value => {threeCallback(value); fiveCallback(value);});}

function sayThree(value) {value % 3 === 0 && console.log(`${value} is divisible by 3`);}

function sayFive(value) {value % 5 === 0 && console.log(`${value} is divisible by 5`);}

threeFive(10, 15, sayThree, sayFive);
