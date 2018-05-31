'use strict';

// paste your freeCodeCamp solutions in here

const Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

// Only change code below this line.

const MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 1;

};

const forSaleMotorBike = new MotorBike();

console.log(forSaleMotorBike);
