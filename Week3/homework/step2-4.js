'use strict';

function Dog(name, color, numLegs) {
  // add your code here

  this.name = name;
  this.color = color;
  this.numLegs = numLegs;
}
const hound = new Dog('Alex', 'Black', 4);
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;
