

let differentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function doubleNumbers(number) {
    return number * 2
}

function evenNumbers(number) {
    return number % 2 == 0
}

//the following function requires an array as an input.

function doubleEvenNumbers(numbers) {
    let filteredNumbers = numbers.filter(evenNumbers)
    let doubledNumbers = filteredNumbers.map(doubleNumbers)

    return doubledNumbers
}



console.log(doubleEvenNumbers(differentNumbers))
