'use strict';

var Car = function () {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

var MotorBike = function () {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};

console.log(new Car());
console.log(new MotorBike());
