'use strict';
const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
const lemon = 'Lemon';

function removeLemon(el) {
    const exceptLemon = el.filter(fruit => fruit !== lemon);
    return `My mom bought me a fruit basket, containing ${exceptLemon.join(', ')} `;
  }
  console.log(removeLemon(fruitBasket));