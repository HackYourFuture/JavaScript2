const letters = ["a", "b", "c", "d", "a", "e", "f", "c", "b"];

let newLetters = letters => letters.filter((v, i) => letters.indexOf(v) === i);
console.log(newLetters(letters));