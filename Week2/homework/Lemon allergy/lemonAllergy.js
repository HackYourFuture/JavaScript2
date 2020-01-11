'use strict';
const fruitBasket = [ 'Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon' ];

const newFruitBasket = fruitBasket.filter((fruit) => !fruit.includes('Lemon'));
console.log(`My mom bought me a fruit basket, containing ${newFruitBasket} !`);
