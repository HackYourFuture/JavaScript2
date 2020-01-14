function createBase(x) {
  // Put here your logic...
  return function foo(y) {
    return x + y
  }
}

const addSix = createBase(6);

// Put here your function calls...
addSix(9);
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));

