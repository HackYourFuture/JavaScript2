function Dog(name, color, Legs) {
  this.name = name;
  this.color = color;
  this.numLegs = Legs;
}

const hound = new Dog('Bob', 'brown', 4);
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;
