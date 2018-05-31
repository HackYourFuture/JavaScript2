'use strict';
// paste your freeCodeCamp solutions in here

//instruction 1 -> create object using constructor function

const motorBike = function () {
    this.engines = 1;
    this.wheels = 2;
    this.seats = 2;
};

const theMotorBike = new motorBike();
console.log(theMotorBike);

//instruction 2 -> Give myCar a nickname property with a string value.

const car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

const myCar = new car();
myCar.nickname = '';
console.log(myCar);

//instruction 3 -> adding parameters

const carInst3 = function (wheels, seats, engines) {
    this.wheels = wheels;
    this.seats = seats;
    this.engines = engines;
};

const myCarInst3 = new carInst3(3, 1, 2);
console.log(myCarInst3);

//Instruction 4 ->Verify an Object's Constructor with instanceof

myCarInst3 instanceof carInst3;

// Instruction 5 -> Add the own properties of myCarInst3 to the array ownProps, without using Object.keys() method

const ownProps = [];

for (const prop in myCarInst3) {
    if (myCarInst3.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
}

console.log(ownProps);

// Instruction 6 ->Use Prototype Properties to Reduce Duplicate Code

carInst3.prototype.type = 'Electric';

// Instruction 7 -> Iterate Over All Properties

const ownProperties = [];
const prototypeProps = [];

for (const prop in myCarInst3) {
    if (myCarInst3.hasOwnProperty(prop)) {
        ownProperties.push(prop);
    } else {
        prototypeProps.push(prop);
    }
}

console.log(ownProperties);
console.log(prototypeProps);

