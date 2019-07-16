'use strict';

function Dog(name, color, numLegs, age, breed) {
  this.name = name;
  this.color = color;
  this.age = age;
  this.numLegs = numLegs;
  this.breed = breed;
}

const hound = new Dog('Puppy', 'brown', 5, 4, 'beagle');

// Do not change or remove anything below this line
module.exports = hound;
