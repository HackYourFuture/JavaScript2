// Snippet
let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/*When the program starts working, javascript goes into the 'creation phase'. Here the variables are hoisted, without values,
 and the functions are stored in the memores. When the execution phase kicks in, a is assigned to 10 and x is assigned to
 a function which returns a function, meaning that x is actually has the value of the second function. The first function also
 updates the value of a, explaining why the value of a is 12 at the end.
*/