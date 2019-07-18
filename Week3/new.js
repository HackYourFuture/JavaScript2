function foo(func) {
  return bar();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
