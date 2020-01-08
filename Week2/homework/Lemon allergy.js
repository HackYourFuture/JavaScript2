'use strict';

const fruitBasket = ['Apple', 'lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function excludeFromArr(Arr, String) {
  return Arr.filter(element => element.toLowerCase() !== String);
}
console.log("My mom bought me a fruit basket, containing " + excludeFromArr(fruitBasket, 'lemon') + "!");
