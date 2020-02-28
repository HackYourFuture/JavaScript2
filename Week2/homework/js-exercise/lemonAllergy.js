const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
lemonRemover = function(x){
   let result= x.filter(x=>x!=='Lemon')
  return "My mom bought me a fruit basket, containing : " + result};
  let arrayOfFruits=lemonRemover(fruitBasket);
  arrayOfFruits;