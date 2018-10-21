'use strict';
// paste your freeCodeCamp solutions in here
const MotorBike = function () {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};
console.log(new MotorBike());

function Dog() {
  this.name = "Boby";
  this.color = "Black";
  this.numLegs = 4;
}
console.log(new Dog());

// Use a Constructor to Create a new Object
let hound = new Dog();
console.log(hound.name);

function Cat(name, color, num) {
  this.name = name;
  this.color = color;
  this.numLegs = num;
}
console.log(new Cat());

// Use a Constructor to Create a new Object
let tomcat = new Cat("tom", "brown", 4);
console.log(tomcat.name);
