'use strict';

(function foo(func) {
  console.log("Hello, Foo");
}());

(function bar() {
  console.log("Hello, I am bar!");
})();
