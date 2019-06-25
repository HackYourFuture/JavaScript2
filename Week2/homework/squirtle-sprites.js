const pokemonDataJSONString = require('./pokemon-data.js')

// Step 1: Create an HTML file
// Step 2: Insert a script tag that points to this javascript file
// Step 3: Convert pokemonDataJSONString to a javascript object so you can access its properties
// Step 4: Display the sprite images (located in the parsed object) in the HTML page. You'll need to do some DOM manipulation kinda of stuff (maybe element.appendChild?)
// BONUS CHALLENGE: Can you use an array method to loop over all sprites so you don't have to manually type each?


console.log(JSON.parse(pokemonDataJSONString))