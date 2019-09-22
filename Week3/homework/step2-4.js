'use strict';

// Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
function Dog(name, color, Legs) {
  this.name = name;
  this.color = color;
  this.numLegs = Legs;
}
// Use the Dog constructor above to create a new instance of Dog, assigning it to a variable hound.
const hound = new Dog('bo', 'White and black', 4);
console.log(hound);
// Do not change or remove anything below this line
module.exports = hound;
