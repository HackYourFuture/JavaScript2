function doubleEvenNumbers(num) {
    return num.filter(nummer => !(nummer % 2)).map(nummer => nummer);
  }
  const myNumbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(doubleEvenNumbers(myNumbers));
  