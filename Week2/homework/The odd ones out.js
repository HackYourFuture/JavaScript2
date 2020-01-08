'use strit';

function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers))


function doubleEvenNumber1(Arr) {
  return Arr.filter(element => element % 2 === 0).map(element => element * 2);

}
console.log(doubleEvenNumber1(myNumbers)) 