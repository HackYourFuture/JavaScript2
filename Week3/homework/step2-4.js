'use strict';

function Dog(name, color, legs) {
  this.name = name;
  this.color = color;
  this.numLegs = legs;
}

const hound = new Dog('Lassie', 'White', 4);

console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;
