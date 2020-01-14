// Snippet
let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/*When the program runs, the variables are hoisted, without values,
 and the functions are stored in the memory.
When the execution phase starts, a is 10 and x is  a function which returns a function, meaning that x is actually has the value of the second function.
The first function also
 updates the value of a, explaining why the value of a is 12 at the end.
*/
