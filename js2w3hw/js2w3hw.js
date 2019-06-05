'use strict';

// 2.1
function foo(func) {
  func();
}
function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// 2.1
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  for (let i = startIndex; i <= stopIndex; i++) {
    if (i % 3 === 0) {
      threeCallback(i);
    }
    if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  console.log(`${number} is divisible by 3`);
}

function sayFive(number) {
  console.log(`${number} is divisible by 5`);
}

threeFive(10, 15, sayThree, sayFive);

// 2.3
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes('abc', 3);

// 2.4
function Dog() {
  this.name = 'pluto';
  this.color = 'yellow-orange';
  this.numLegs = 4;
}
let hound = new Dog();

// 2.5
