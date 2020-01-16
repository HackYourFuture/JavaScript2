//
function threeFive(startIndex, stopIndex, threeCallback = 3, fiveCallback = 5) {
    const numbers = [];
    const sayWhat = [];

    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }

    for (let i = 0; i < numbers.length; i++) {
        if (i % threeCallback === 0) {
            sayWhat.push("Three");
        } else if (i % fiveCallback === 0) {
            sayWhat.push("Five");
        }
    }

    return numbers + "\n" + sayWhat;
}

console.log(threeFive(10, 15, 3, 5));