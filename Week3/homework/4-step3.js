'use strict';

const Car = function () {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

const MotorBike = function () {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;
};

const myCar = new Car();
console.log(myCar);

const myMotorBike = new MotorBike();
console.log(myMotorBike);
