// Snippet
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

/*These two functions has almost nothing to do with each other.
The first one when it is called it adds 1 to x resulting in 10.
The seconds one takes an obj and adds one to the x property. Therefore, logging x =10 This x can as well be name, number or whatever*/