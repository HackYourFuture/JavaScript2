'use strict';

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

// Write a function
// Use the`filter` array function to take out the lemons
// Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

function noLemon(array) {
  const filterLemon = `My mom bought me a fruit basket, containing ${array.filter(key => key !== 'Lemon',
  )} !`;
  return filterLemon;
}

console.log(noLemon(fruitBasket));