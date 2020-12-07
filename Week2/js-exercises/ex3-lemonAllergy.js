/**
 
 ** Exercise 3: Lemon allergy **
 
  Your mom bought you a basket of fruit, because you 're doing so well in HackYourFuture. How sweet of her!
  However, she forgot that you are allergic to lemons!Let 's quickly dispose of them before you get an attack.

  Write a function that uses the filter array function to take out the lemons.
  Avoid using for loop or forEach.
  Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

 */

'use strict';

function takeOutLemons(basket) {
  const filteredBasket = basket.filter(fruit => fruit.toLowerCase() !== 'lemon'); // in case that 'lemon' is written in both the capital or small letter
  return `My mom bought me a fruit basket, containing ${filteredBasket.join(', ').toLowerCase()}!`;
}

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

console.log(takeOutLemons(fruitBasket));
