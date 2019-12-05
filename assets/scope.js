// Global scope variable available throughout the application.
// Try doing console.log(globalVar) in callbacks.js or closures.js
const globalVar = 100;

{
  'use strict';

  // Exercise #1
  // const firstLocalFunction = () => {
  //   const localVar = "I am a local variable";
  //   console.log('INSIDE FIRST LOCAL FUNCTION', localVar, globalVar);
  // };

  // firstLocalFunction();

  // Exercise #2
  // const secondLocalFunction = () => {
  //   // can use the same variable name here because of local scoping
  //   const localVar = 10;
  //   const nestedFunction = () => {
  //     const nestedVar = "I am a nested variable";
  //     console.log('INSIDE NESTED FUNCTION', nestedVar, localVar, globalVar);
  //   };

  //   // nestedVar is not visible here
  //   nestedFunction();
  // };

  // secondLocalFunction();

  // localVar defined inside the functions isn't visible here

  // Exercise #3
  // const myFunction = () => {
  //   const localVar = 10;

  //   if (localVar === 10) {
  //     const innerVar = 100;
  //     console.log('INSIDE IF BLOCK', localVar, innerVar);
  //   }

  //   console.log(innerVar);
  // };

  // myFunction();

  // Exercise #4
  // const trickFunction = () => {
  //   const arr = [10, 12, 15, 21];
  //   for (var i = 0; i < arr.length; i++) {
  //     setTimeout(function() {
  //       console.log('Index: ' + i + ', element: ' + arr[i]);
  //     }, 3000);
  //   }
  // };

  // trickFunction();
};