function sayThree(number) {
  if (number % 3) {
    return number;
  }
  console.log(`${number} can be divided 3`);
}
exports.sayThree = sayThree;
