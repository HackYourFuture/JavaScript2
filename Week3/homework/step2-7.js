'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// First function, x and val have different memories, so that also f1 returns 10, we log actually 9(which is x original value).
// Second function, y influenced by x, but y and val have same memories, so that we log 10 now.
