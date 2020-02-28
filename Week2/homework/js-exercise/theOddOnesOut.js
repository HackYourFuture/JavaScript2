let doubleEvenNumbers =function (numbers) {
let evenNu= numbers.filter(number=>number%2===0);
    const map1 =evenNu.map(x => x * 2);
    return map1 };
    const myNumbers = [1, 2, 3, 4];
doubleEvenNumbers(myNumbers);// Logs "[4, 8]" to the console