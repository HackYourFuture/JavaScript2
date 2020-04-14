/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 100 words or less.

*/

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

/*
  Write out your reasoning here (100 words or less):



*/
