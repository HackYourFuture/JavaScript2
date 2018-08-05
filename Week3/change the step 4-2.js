'use strict';

//1.Your task is to write a function that takes another function as an argument and runs it.
console.log('\n***************Exercise number 1 ************************************************************\n');

function foo(func) {
    func();
}

function bar() {
    console.log('Hello, I am bar!');
}
foo(bar);

//2. make array 
// start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  
console.log('\n***************Exercise number 2 ************************************************************\n');

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }
    console.log(numbers);

    numbers.forEach(num => {
        if (num % 3 === 0) {
            threeCallback(num);
        }
        if (num % 5 === 0) {
            fiveCallback(num);
        }
    })
}

// uses a closure
function sayDivisibleBy(divisor) {
    return function (num) {
        console.log(`${num} is divisible by ${divisor}`);
    }
}

threeFive(10, 15, sayDivisibleBy(3), sayDivisibleBy(5));


//3. Please solve this problem using: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
console.log('\n***************Exercise number 3 ************************************************************\n');

//3.1 A for loop.
console.log('\n***************Exercise 3.1***************\n')
function repeatStringNumTimes(str, num) {

    str = num < 0 ? "" : str;
    let newString = "";
    for (let i = 0; i < num; i++) {
        newString += str;
    }

    console.log('written with FOR LOOP: ' + newString);
}

repeatStringNumTimes("abc", 3);


//3.2 A while loop.
console.log('\n***************Exercise 3.2***************\n')


function repeatStringNumTimess(str, num) {

    str = num < 0 ? "" : str;
    let newString2 = "";
    let i = 0;
    while (i < num) {
        newString2 += str;
        i++;
    }

    console.log('written with WHILE LOOP: ' + newString2);
}

repeatStringNumTimess("abc", 3);

//3.3 A do loop.
console.log('\n***************Exercise 3.3***************\n')

function repeatStringNumTimesss(str, num) {

    str = num < 0 ? "" : str;
    let newString3 = "";
    let i = 0;

    do {
        newString3 += str;
        i++;
    } while (i < num);

    console.log('written with DO LOOP: ' + newString3);
}

repeatStringNumTimesss("abc", 3);

//4. Some practice with objects https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions

console.log('\n***************Exercise number 4 ************************************************************\n');


let Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};


let MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;

};
console.log(Car);
console.log(MotorBike);

//5. Nested loops https://www.freecodecamp.com/challenges/nesting-for-loops

console.log('\n***************Exercise number 5 ************************************************************\n');

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = arr[i][j] * product;
        }
    }

    console.log(' The result of multiplies the product variable by each number in the sub-arrays of main array: ' + product);
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//How would you print all the items of an array with 3 dimensions? How about with K dimensions?
console.log('\n***************Exercise number 6 ************************************************************\n');

console.log("Nested loops for arrays item, help us to get access to the items. ");

console.log('\n***************Exercise number 7 ************************************************************\n');

console.log("Javascript always passes by value. However, if you pass an \n object to a function, the 'value' is really a reference to \n that object, so the function can modify that object's\n properties but  not cause the variable outside the function \n to point to some other object.");