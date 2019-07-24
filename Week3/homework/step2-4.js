'use strict';

function Dog(name, color, food, numLegs) {
  // add your code here
  this.name = name;
  this.color = color;
  this.food = food;
  this.numLegs = numLegs;
}

const hound = new Dog('kuchuk', 'black and white', 'meat', 4);

// Do not change or remove anything below this line
module.exports = hound;
