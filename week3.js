'use strict';

//step 2.1
function foo(func) {
  bar();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

//step 2.2
function threeFive(startIndex, stopIndex, threeCallBack, fiveCallBack) {
  const numbers = [];
  let i = startIndex;
  while (i >= startIndex && i <= stopIndex) {
    numbers.push(i);
    i++;
  }
  console.log(numbers);

  for (let number of numbers) {
    if (number % 3 === 0) {
      divThree(number);
    }
    if (number % 5 === 0) {
      divFive(number);
    }
  }
}

function divThree(num) {
  console.log(`${num} is divisible by 3.`);
}

function divFive(num) {
  console.log(`${num} is divisible by 5.`);
}

threeFive(10, 15, divThree, divFive);

//step2.3
//for
function repeatStringNumTimes(str, num) {
  let newStr = '';
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}
repeatStringNumTimes('abc', 3);

//while
function repeatStringNumTimes(str, num) {
  let newStr = '';
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}
repeatStringNumTimes('abc', 3);

//do-while
function repeatStringNumTimes(str, num) {
  let newStr = '';
  if (num > 0) {
    do {
      newStr += str;
      num--;
    } while (num > 0);
  }
  return newStr;
}
repeatStringNumTimes('abc', 3);

//step2.4
function Dog() {
  this.name = 'New Dog';
  this.color = 'Black';
  this.numLegs = 4;
}
const hound = new Dog();

//step2.5
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      product *= arr[i][k];
    }
  }
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//step2.6
const arr2d = [[1, 2], [3, 4], [5, 6]];

function flattenNestedArrays(arr) {
  let flattenedList = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      flattenedList.push(arr[i][k]);
    }
  }
  return flattenedList;
}
flattenNestedArrays(arr2d);

//step 2.7
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
//func f1 takes a parameter and we pass a parameter by referencing const x.
//So we are just passing a parameter with value.We are not manipulating the x itself.
//Whereas in func f2 we are passing the parameter by reference.
//So our variable is referencing to an object which then will be manipulated / updated by the function.

//step3
function createBase(num) {
  return function(num2) {
    return num + num2;
  };
}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

//bonus assignment
const arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
let unique = [...new Set(arr)];
console.log(unique);
