var tester = "hey hi";
console.log(tester);
let b;
var c;
const d =2
console.log(d);

function newFunction(x) {
  x = "hello";
  console.log(x);
  let a = 5;
}

newFunction();
// newFunction(tester);
console.log(tester); // error: hello is not defined
// console.log(a);
console.log(b);
console.log(c);
