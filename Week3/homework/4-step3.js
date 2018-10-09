'use strict';
// paste your freeCodeCamp solutions in here
function Dog() {
  this.name = "Boby";
  this.color = "Black";
  this.numLegs = 4;
}
console.log(Dog);

// Use a Constructor to Create a new Object
let hound = new Dog();
console.log(hound.name);

function Cat(name, color, num) {
  this.name = name;
  this.color = color;
  this.numLegs = num;
}
console.log(Cat);

// Use a Constructor to Create a new Object
let tomcat = new Cat("tom", "brown", 4);
console.log(tomcat.name);
