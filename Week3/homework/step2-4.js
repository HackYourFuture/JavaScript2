'use strict';

function Dog(name, age, type, color, weight) {
  this.name = name;
  this.age = age;
  this.type = type;
  this.color = color;
  this.weight = weight;
}

const hound = new Dog('White Fang', 5, 'Wolf', 'White', 35);

// Do not change or remove anything below this line
module.exports = hound;
