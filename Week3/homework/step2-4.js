'use strict';

function Dog(name, color) {
  this.name = name;
  this.numLegs = 4;
  this.enemies = ['cats'];
  this.color = color;
}

const hound = new Dog('Max', 'black');

// Do not change or remove anything below this line
module.exports = hound;
