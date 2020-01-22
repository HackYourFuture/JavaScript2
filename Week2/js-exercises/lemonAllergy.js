const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function lemonsOut(fruit) {
    return fruit != "Lemon"
}


function removeLemons(fruitBasket) {

    let cleanFruitBasket = fruitBasket.filter(lemonsOut)
    return ` "My mom bought me a fruit basket, containing ${cleanFruitBasket} !"`


}

console.log(removeLemons(fruitBasket))

