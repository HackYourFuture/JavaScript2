'use strict';

function powerMyNumbers(call, a, b) {
  const result = call(a, b);
  console.log(result);
}

function power(x, y) {
  return Math.pow(x, y);
}

powerMyNumbers(power, 5, 3);
