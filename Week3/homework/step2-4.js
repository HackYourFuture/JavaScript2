'use strict';

function Dog() {
  this.name = 'Puppy';
  this.color = 'brown';
  this.numLegs = 4;
}

const hound = new Dog();
hound.name = 'Miami';
hound.color = 'pink';
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;
