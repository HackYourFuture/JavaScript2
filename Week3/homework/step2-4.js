'use strict';

function Dog() {
  this.name = 'Lassie';
  this.color = 'white';
  this.numLegs = 4;
}

const hound = new Dog();
console.log(hound.name, hound.color, hound.numLegs);

// Do not change or remove anything below this line
module.exports = hound;
