// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);// the value of f1(x) is 10
console.log(x);// the value of x is 9

const y = { x: 9 }; //y is an object
function f2(val) {
  val.x = val.x + 1;
  return val; //the value of f1(x) is 10 , so the f2 will return x+1 
}
f2(y);//the value of f2(x) 11
console.log(y); //the value of y {x: 10}