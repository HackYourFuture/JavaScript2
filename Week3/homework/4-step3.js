'use strict';

const Car = function () {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// const MotorBike = function () {
//   this.wheels = 2;
//   this.engines = 1;
//   this.seats = 1;
// };

const MotorBike = new Car;
MotorBike.wheels = 2;
MotorBike.seats = 1;

console.log('MotorBike has ' + MotorBike.wheels + ' wheels, ' + MotorBike.engines + ' engines and ' + MotorBike.seats + ' seats.');
