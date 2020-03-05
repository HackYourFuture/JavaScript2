// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();
/*
x is assigned to a function in row 3 and the function is wrapped with two parentheses and follwoed by () so
the function will be declared and excuted , x() will alert 12 in browser window .
 */