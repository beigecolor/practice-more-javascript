// Predict what this code will print out.
// Check your prediction by running the code in your command line
// with `node problems/1_scope.js`

var foo = 5;

function bar() {
  var foo = "Anthony";
  foo + " is home";
  return foo;
}

console.log(foo);
5; // What is foo on this line?
console.log(bar());
Anthony; // What is bar() on this line?
console.log(foo);
5; // What is foo on this line?
