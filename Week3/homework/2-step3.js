//step 3.2

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  console.log(values);

  values.forEach(value => {
    if (value % 3 === 0 && value % 5 === 0) {
      threeCallback(value);
      fiveCallback(value);
    }

    else if (value % 5 === 0) {
      fiveCallback(value);
    }

    else if (value % 3 === 0) {
      threeCallback(value);
    }
  }
  )
}
function sayThree() {
  console.log("divisible with 3");
}

function sayFive() {
  console.log("divisible with 5");
}

threeFive(10, 15, sayThree, sayFive)