{
  'use strict'

  /*
   *  Function Hoisting
   */

  // Exercise #1
  // abc();
  // function abc() {
  //   console.log('INSIDE FUNCTION ABC');
  // }

  // xyz();
  // var xyz = function() {
  //   console.log('INSIDE FUNCTION XYZ');
  // };

  // Exercise #2
  // function foo1() {
  //   function bar() {
  //       return 3;
  //   }
  //   return bar();
  //   function bar() {
  //       return 8;
  //   }
  // }
  // console.log(foo1());

  // Exercise #3
  // function foo2(){
  //   var bar = function() {
  //     return 3;
  //   };
  //   return bar();
  //   var bar = function() {
  //       return 8;
  //   };
  // }
  // console.log(foo2());

  // Exercise #4
  // console.log(foo3());
  // function foo3(){
  //   var bar = function() {
  //     return 3;
  //   };
  //   return bar();
  //   var bar = function() {
  //       return 8;
  //   };
  // }

  // Exercise #5
  // function foo4(){
  //   return bar();
  //   var bar = function() {
  //     return 3;
  //   };
  //   var bar = function() {
  //       return 8;
  //   };
  // }
  // console.log(foo4());

  /*
   *  Variable Hoisting
   */

  // Exercise #1
  // arr = [10,20,30];
  // console.log(arr);
  // var arr;

  // console.log(obj);
  // var obj = { a: 10, b: 20 };

  // Exercise #2
  // console.log(num1);
  // let num1 = 10;

  /*
   * Variable and Function hoisting combined
   */

  // Exercise #1
  // function parent() {
  //   function hoisted() {
  //       return "I'm a function";
  //   }
  //   hoisted = "I'm a variable";
  //   return hoisted(); 
  // }
  // console.log(parent());

  // Exercise #2 (Tricky)
  // function parent() {
  //   var hoisted = "I'm a variable";
  //   function hoisted() {
  //       return "I'm a function";
  //   }
  //   return hoisted(); 
  // }
  // console.log(parent());

  // Exercise #3
  // function func() {
  //   function foo() { };
  //   return foo;
  //   foo = 10;
  //   foo = 1;
  // }
  // console.log(typeof func());

  // Exercise #4
  // function func() {
  //   return foo;
  //   foo = 10;
  //   var foo = 1;
  //   function foo() { };
  // }
  // console.log(typeof func());
}